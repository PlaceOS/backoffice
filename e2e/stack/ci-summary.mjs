/**
 * Write the GitHub step summary from Playwright's JSON report.
 *
 * It shows the flaky specs (passed on retry) on their own. While the suite is
 * advisory, they are the signal that it cannot be trusted yet, and "all
 * green" hides them.
 *
 * Always exits 0: the test step decides pass or fail.
 *
 *   node e2e/stack/ci-summary.mjs >> "$GITHUB_STEP_SUMMARY"
 */
import { readFileSync } from 'fs';

const REPORT = 'dist/.playwright/e2e-local/results.json';
const out = (s = '') => process.stdout.write(`${s}\n`);

let report;
try {
    report = JSON.parse(readFileSync(REPORT, 'utf8'));
} catch (e) {
    out('## backoffice e2e (local backend)');
    out();
    out(
        `No JSON report at \`${REPORT}\`. The run stopped before Playwright started.`,
    );
    out();
    out(`> ${e.message}`);
    process.exit(0);
}

/** Every spec in a suite tree */
function* specsOf(suite) {
    yield* suite.specs ?? [];
    for (const child of suite.suites ?? []) yield* specsOf(child);
}

/** Playwright's test status: expected, unexpected, flaky or skipped */
const STATE = {
    expected: 'passed',
    unexpected: 'failed',
    flaky: 'flaky',
    skipped: 'skipped',
};
const rows = (report.suites ?? [])
    .flatMap((suite) => [...specsOf(suite)])
    .flatMap((spec) =>
        spec.tests.map((test) => ({
            name: `\`${spec.file}\`: ${spec.title} [${test.projectName}]`,
            state: STATE[test.status] ?? test.status,
        })),
    );
const named = (state) => rows.filter((r) => r.state === state);

out('## backoffice e2e (local backend), advisory');
out();
out('| result | count |');
out('|---|---|');
for (const state of ['passed', 'flaky', 'failed', 'skipped']) {
    out(`| ${state} | ${named(state).length} |`);
}
out();
out(`Duration: ${((report.stats?.duration ?? 0) / 1000).toFixed(1)}s`);
out();
for (const [state, note] of [
    [
        'flaky',
        'These passed on a retry. Find the cause before the suite gates merges.',
    ],
    ['failed', 'The traces, videos and backend logs are in the run artifacts.'],
]) {
    if (!named(state).length) continue;
    out(`### ${state[0].toUpperCase()}${state.slice(1)}`);
    out();
    out(note);
    out();
    for (const r of named(state)) out(`- ${r.name}`);
    out();
}
out('This check is advisory. It does not gate merges.');

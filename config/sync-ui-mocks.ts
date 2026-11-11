/**
 * Copies the mock zones, rooms and staff of the user-interfaces repo into
 * `src/app/mocks/data/ui-mocks.ts`, so the backoffice demo shows the same
 * organisation as the other PlaceOS apps.
 *
 * Usage: bun config/sync-ui-mocks.ts [user-interfaces path] [git ref]
 *
 * - The path defaults to `user-interfaces` next to the backoffice checkout
 * - The ref defaults to `origin/develop`. Run `git fetch` there first
 * - user-interfaces must have its `node_modules` (`bun install`)
 *
 * The UI mocks make their data with a seeded random function, so this script
 * runs their generators instead of copying their source. It exports the ref
 * with `git archive` into a temp folder, so the checkout does not change.
 */
import { $ } from 'bun';
import { existsSync } from 'node:fs';
import { mkdtemp, readFile, rm, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';

type Raw = Record<string, unknown>;

/** Output of the generator that runs in the UI repo */
interface UiData {
    orgs: Raw[];
    regions: Raw[];
    buildings: Raw[];
    levels: Raw[];
    spaces: Raw[];
    staff: Raw[];
    active_user: Raw;
}

const ROOT = resolve(import.meta.dir, '..');
const OUTPUT = join(ROOT, 'src/app/mocks/data/ui-mocks.ts');

/** Folder that holds the main checkout. Works from a git worktree too */
async function checkoutParent() {
    const common_dir =
        await $`git -C ${ROOT} rev-parse --path-format=absolute --git-common-dir`.text();
    return dirname(dirname(common_dir.trim()));
}

const UI_ROOT = resolve(
    process.argv[2] || join(await checkoutParent(), 'user-interfaces'),
);
const REF = process.argv[3] || 'origin/develop';

/** Copies `generateMockSpace` from `@placeos/events`, without the rest of
 *  that library. The library loads Angular components, which Bun can not
 *  run. Keeping the real function keeps the random sequence the same */
async function eventsStub(dir: string) {
    const source = await readFile(
        join(dir, 'libs/events/src/lib/space.utilities.ts'),
        'utf8',
    );
    const users = await readFile(
        join(dir, 'libs/users/src/lib/user.utilities.ts'),
        'utf8',
    );
    const generator = source.match(/^let SPACE_COUNT[\s\S]*?^}$/m)?.[0];
    const domain = users.match(/^export let USER_DOMAIN = .*$/m)?.[0];
    if (!generator || !domain) {
        throw new Error('generateMockSpace or USER_DOMAIN not found');
    }
    return [
        `import { HashMap, predictableRandomInt } from '@placeos/common';`,
        domain,
        generator,
    ].join('\n');
}

/** Browser globals that the UI libraries use when they load */
const SHIM = `
import '@angular/compiler';
import { JSDOM } from 'jsdom';
const dom = new JSDOM('<!doctype html><html><body></body></html>', { url: 'http://localhost/' });
for (const key of ['window', 'document', 'navigator', 'localStorage', 'sessionStorage', 'location', 'HTMLElement', 'Element', 'Node', 'Event', 'CustomEvent', 'StorageEvent', 'MutationObserver', 'getComputedStyle']) {
    if (!(key in globalThis)) globalThis[key] = key === 'window' ? dom.window : dom.window[key];
}
`;

/** Loads the mocks like the apps do (the index first), so the seeded
 *  random values come out in the same order */
const GENERATOR = `
import './libs/mocks/src/index';
import { MOCK_BUILDINGS, MOCK_LEVELS, MOCK_ORGS, MOCK_REGIONS } from './libs/mocks/src/lib/api/zone.data';
import { MOCK_SPACES } from './libs/mocks/src/lib/api/spaces.data';
import { ACTIVE_USER, MOCK_STAFF } from './libs/mocks/src/lib/api/users.data';
await Bun.write(process.argv[2], JSON.stringify({
    orgs: MOCK_ORGS, regions: MOCK_REGIONS, buildings: MOCK_BUILDINGS, levels: MOCK_LEVELS,
    spaces: MOCK_SPACES, staff: MOCK_STAFF, active_user: ACTIVE_USER,
}));
// The mocks start timers, so stop them
process.exit(0);
`;

/** Runs the UI mock generators and returns their data */
async function generate(dir: string): Promise<UiData> {
    await $`git -C ${UI_ROOT} archive ${REF} libs tsconfig.base.json | tar -x -C ${dir}`;
    await symlink(join(UI_ROOT, 'node_modules'), join(dir, 'node_modules'));
    // Made by a postinstall step, so it is not in git
    const version = join(dir, 'libs/common/src/lib/version.ts');
    if (!existsSync(version)) {
        await writeFile(
            version,
            `export const VERSION = { raw: 'mock', hash: '', version: '', time: 0 };`,
        );
    }
    const base = JSON.parse(
        await readFile(join(dir, 'tsconfig.base.json'), 'utf8'),
    );
    base.compilerOptions.paths['@placeos/events'] = ['events-stub.ts'];
    await writeFile(join(dir, 'tsconfig.json'), JSON.stringify(base));
    await writeFile(join(dir, 'events-stub.ts'), await eventsStub(dir));
    await writeFile(join(dir, 'shim.ts'), SHIM);
    await writeFile(join(dir, 'generate.ts'), GENERATOR);
    const output = join(dir, 'output.json');
    await $`bun --preload ./shim.ts generate.ts ${output}`.cwd(dir).quiet();
    return JSON.parse(await readFile(output, 'utf8'));
}

/** Copies the listed fields that have a value */
function pick(item: Raw, keys: string[]): Raw {
    const out: Raw = {};
    for (const key of keys) {
        if (item[key] !== undefined && item[key] !== '') out[key] = item[key];
    }
    return out;
}

/** Engine zone fields. `settings` becomes a settings document in the mocks */
function toZone(zone: Raw): Raw {
    const coordinates = (zone.address as Raw | undefined)?.coordinates as
        | { lat: number; lng: number }
        | undefined;
    return {
        ...pick(zone, [
            'id',
            'name',
            'display_name',
            'description',
            'tags',
            'parent_id',
            'code',
            'type',
            'count',
            'capacity',
            'map_id',
            'location',
        ]),
        ...(coordinates
            ? { location: `${coordinates.lat},${coordinates.lng}` }
            : {}),
        triggers: [],
        settings: zone.settings || {},
    };
}

/**
 * Engine system fields of a UI room. The UI rooms point to levels by floor
 * index (`bld-01_lvl-0`), but the level zones use the level code
 * (`bld-01_lvl-G`). IDs that are not zones are changed to the level at that
 * index of the building, so the level pages list their rooms.
 * The UI room emails have two `@` (`test.space.1@@place.tech`), which the
 * system form rejects, so one is removed.
 */
function toSystem(space: Raw, data: UiData, zone_ids: Set<string>): Raw {
    const building = data.buildings.find(({ id }) => id === space.building_id);
    const levels = (building?.levels as string[] | undefined) || [];
    const zones = (space.zones as string[]).map((id) => {
        if (zone_ids.has(id)) return id;
        const level = `${space.building_id}_${levels[space.floor_number as number]}`;
        if (!zone_ids.has(level))
            throw new Error(`No zone for ${id} of ${space.id}`);
        return level;
    });
    return {
        ...pick(space, [
            'id',
            'name',
            'display_name',
            'email',
            'capacity',
            'features',
            'bookable',
            'map_id',
            'images',
            'type',
        ]),
        email: `${space.email || ''}`.replace(/@+/, '@') || undefined,
        code: space.room_code,
        zones,
        modules: [],
    };
}

/** Engine user fields of a UI staff member */
function toUser(staff: Raw, active_user: Raw): Raw {
    const extension = (staff.extension_data as Raw | undefined) || {};
    return {
        ...pick(staff, [
            'id',
            'name',
            'email',
            'first_name',
            'last_name',
            'phone',
            'department',
            'groups',
        ]),
        staff_id: extension.employee_id,
        image: staff.avatar,
        sys_admin: staff.email === active_user.email && !!active_user.sys_admin,
    };
}

const dir = await mkdtemp(join(tmpdir(), 'ui-mocks-'));
try {
    const commit = (
        await $`git -C ${UI_ROOT} rev-parse --short ${REF}`.text()
    ).trim();
    const data = await generate(dir);
    const zones = [
        ...data.orgs,
        ...data.regions,
        ...data.buildings,
        ...data.levels,
    ].map(toZone);
    const zone_ids = new Set(zones.map(({ id }) => id as string));
    const current = data.staff.find(
        ({ email }) => email === data.active_user.email,
    );
    if (!current) throw new Error('Active user is not a staff member');
    const snapshot = {
        zones,
        systems: data.spaces.map((space) => toSystem(space, data, zone_ids)),
        users: data.staff.map((staff) => toUser(staff, data.active_user)),
        /** UI apps sign in as this staff member */
        current_user_id: current.id,
    };
    const source = [
        `// Made by config/sync-ui-mocks.ts from user-interfaces ${REF} (${commit}).`,
        `// Do not edit. Run the script again to update it.`,
        `export const UI_MOCKS = ${JSON.stringify(snapshot)};`,
        '',
    ].join('\n');
    await writeFile(OUTPUT, source);
    await $`bunx prettier --write ${OUTPUT}`.cwd(ROOT).quiet();
    const counts = `${zones.length} zones, ${snapshot.systems.length} systems, ${snapshot.users.length} users`;
    console.log(`Wrote ${counts} from ${REF} (${commit})`);
} finally {
    await rm(dir, { recursive: true, force: true });
}

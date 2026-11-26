import { Dialog } from '@angular/cdk/dialog';
import { TestBed } from '@angular/core/testing';
import {
    build_monitor,
    type BuildMonitorState,
    type BuildMonitorTaskStatus,
} from '@placeos/ts-client';
import { mockReply } from '@placeos/ts-client/compat';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { PlaceBuildListComponent } from '../../app/admin/build-list.component';
vi.mock('@placeos/ts-client', { spy: true });
// Confirm each cancel and run its action, with no dialog
vi.mock('../../app/overlays/confirm-modal.component', () => ({
    confirmAndRun: async (
        _: unknown,
        __: unknown,
        options: { action: () => Promise<unknown> },
    ) => {
        await options.action();
        return true;
    },
}));

type MonitorReply = Awaited<ReturnType<typeof build_monitor.monitor>>;

const job = (
    state: BuildMonitorState,
    id = 'job-1',
): BuildMonitorTaskStatus => ({
    state,
    id,
    message: '',
    driver: 'drivers/place/meet.cr',
    repo: 'drivers',
    branch: 'master',
    commit: 'abc123',
    timestamp: '2026-01-01T00:00:00Z',
});

/** A promise and the function that resolves it */
function deferred() {
    let resolve: (reply: MonitorReply) => void = () => undefined;
    const promise = new Promise<MonitorReply>((done) => (resolve = done));
    return { promise, resolve };
}

/**
 * The component, with a monitor API that gives `reply(state)` for the jobs of
 * each state. `render` uses the real template.
 */
async function setup(
    reply: (state: BuildMonitorState) => Promise<MonitorReply> | MonitorReply,
    render = false,
) {
    vi.useFakeTimers();
    const monitor = vi
        .mocked(build_monitor.monitor)
        .mockImplementation(async (input) =>
            reply(input?.state as BuildMonitorState),
        );
    TestBed.configureTestingModule({
        imports: [PlaceBuildListComponent],
        providers: [{ provide: Dialog, useValue: { open: vi.fn() } }],
    });
    if (!render) {
        TestBed.overrideComponent(PlaceBuildListComponent, {
            set: { template: '' },
        });
    }
    await TestBed.compileComponents();
    const fixture = TestBed.createComponent(PlaceBuildListComponent);
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(0);
    return { fixture, component: fixture.componentInstance, monitor };
}

/** States asked for since the last `mockClear` */
function askedStates() {
    return vi
        .mocked(build_monitor.monitor)
        .mock.calls.map(([input]) => input?.state);
}

describe('PlaceBuildListComponent', () => {
    afterEach(() => {
        TestBed.resetTestingModule();
        vi.useRealTimers();
        vi.restoreAllMocks();
    });

    it('refreshes the jobs, so a finished job shows its new state', async () => {
        let job_state: BuildMonitorState = 'running';
        const { fixture, component } = await setup((state) =>
            mockReply(state === job_state ? [job(job_state)] : []),
        );
        expect(component.job_list().map((_) => _.state)).toEqual(['running']);

        job_state = 'done';
        await vi.advanceTimersByTimeAsync(5 * 1000);

        expect(component.job_list().map((_) => _.state)).toEqual(['done']);
        fixture.destroy();
    });

    it('polls the active jobs often and the finished jobs slowly', async () => {
        const { fixture, monitor } = await setup(() => mockReply([]));
        monitor.mockClear();

        await vi.advanceTimersByTimeAsync(5 * 1000);
        expect(askedStates()).toEqual(['pending', 'running']);

        await vi.advanceTimersByTimeAsync(60 * 1000);
        expect(askedStates().filter((_) => _ === 'done')).toHaveLength(1);
        fixture.destroy();
    });

    it('shows a job that finishes between the active and finished queries', async () => {
        let job_state: BuildMonitorState = 'running';
        let open: () => void = () => undefined;
        const opened = new Promise<void>((done) => (open = done));
        // The server reads the job state when it replies. The active reply
        // comes after the job finishes
        const { fixture, component } = await setup(async (state) => {
            if (state === 'running') await opened;
            return mockReply(state === job_state ? [job(job_state)] : []);
        });

        job_state = 'done';
        open();
        await vi.advanceTimersByTimeAsync(0);

        expect(component.job_list().map((_) => _.state)).toEqual(['done']);
        fixture.destroy();
    });

    it('waits for all requests of a load before the next load', async () => {
        const running = deferred();
        const { fixture, component, monitor } = await setup((state) =>
            state === 'running'
                ? running.promise
                : state === 'pending'
                  ? { ok: false, error: { kind: 'network', message: 'Down' } }
                  : mockReply([]),
        );
        const calls = monitor.mock.calls.length;

        await vi.advanceTimersByTimeAsync(5 * 1000);
        expect(component.loading()).toBeTruthy();
        expect(monitor.mock.calls.length).toBe(calls);

        running.resolve(mockReply([]));
        await vi.advanceTimersByTimeAsync(0);
        expect(component.loading()).toBe('');
        expect(component.load_error()).toContain('Down');
        fixture.destroy();
    });

    it('does not show a cancelled job again from an older poll', async () => {
        let cancelled = false;
        let late_poll: ReturnType<typeof deferred> | undefined;
        const refresh = deferred();
        const { fixture, component } = await setup((state) => {
            if (state === 'running' && late_poll) return late_poll.promise;
            if (state === 'running' && !cancelled) {
                return mockReply([job('running')]);
            }
            if (state === 'cancelled' && cancelled) return refresh.promise;
            return mockReply([]);
        });
        vi.mocked(build_monitor.cancel).mockImplementation(async () => {
            cancelled = true;
            return mockReply(undefined);
        });
        // A poll starts before the cancel, and returns after it
        late_poll = deferred();
        await vi.advanceTimersByTimeAsync(5 * 1000);
        await component.remove(job('running'));
        late_poll.resolve(mockReply([job('running')]));
        late_poll = undefined;
        await vi.advanceTimersByTimeAsync(0);
        expect(component.job_list()).toEqual([]);

        // Then one refresh gets the new state
        refresh.resolve(mockReply([job('cancelled')]));
        await vi.advanceTimersByTimeAsync(0);
        expect(component.job_list().map((_) => _.state)).toEqual(['cancelled']);
        fixture.destroy();
    });

    it('shows a job that comes back in two states once, in the later state', async () => {
        const { fixture } = await setup(
            (state) =>
                mockReply(
                    state === 'running' || state === 'done' ? [job(state)] : [],
                ),
            true,
        );
        fixture.detectChanges();
        const element: HTMLElement = fixture.nativeElement;

        expect(
            fixture.componentInstance.job_list().map((_) => _.state),
        ).toEqual(['done']);
        // One row, with no Cancel button
        expect(element.textContent.split('drivers/place/meet.cr')).toHaveLength(
            2,
        );
        expect(element.querySelectorAll('button[icon]')).toHaveLength(0);
        fixture.destroy();
    });

    it('moves focus to the table when a refresh removes the focused button', async () => {
        let job_state: BuildMonitorState = 'running';
        const { fixture } = await setup(
            (state) => mockReply(state === job_state ? [job(job_state)] : []),
            true,
        );
        fixture.detectChanges();
        const element: HTMLElement = fixture.nativeElement;
        const cancel = element.querySelector<HTMLButtonElement>('button[icon]');
        cancel?.focus();
        expect(document.activeElement).toBe(cancel);

        job_state = 'done';
        await vi.advanceTimersByTimeAsync(5 * 1000);
        fixture.detectChanges();

        expect(element.querySelector('button[icon]')).toBeNull();
        expect(document.activeElement).toBe(
            element.querySelector('[tabindex="-1"]'),
        );
        fixture.destroy();
    });
});

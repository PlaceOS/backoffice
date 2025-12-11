import { describe, expect, it } from 'vitest';
import {
    formatAttendees,
    formatAttendeesWithHost,
    formatDate,
    formatDuration,
    formatPeriod,
    formatPeriodWithDuration,
    formatRecurrence,
    formatTime,
    RECURRENCE_PERIODS,
} from '../../app/common/formatting';

// Mock PlaceUser interface for testing
interface MockPlaceUser {
    email: string;
    name: string;
}

describe('formatting.ts utilities', () => {
    describe('formatAttendees', () => {
        it('should format single attendee without host', () => {
            const attendees: MockPlaceUser[] = [
                { email: 'john@test.com', name: 'John Doe' },
            ];
            const result = formatAttendees(attendees as any);
            expect(result).toContain('1 Attendee');
            expect(result).toContain('John Doe');
        });

        it('should format multiple attendees without host', () => {
            const attendees: MockPlaceUser[] = [
                { email: 'john@test.com', name: 'John Doe' },
                { email: 'jane@test.com', name: 'Jane Doe' },
            ];
            const result = formatAttendees(attendees as any);
            expect(result).toContain('2 Attendees');
            expect(result).toContain('John Doe');
            expect(result).toContain('Jane Doe');
        });

        it('should format attendees with host', () => {
            const attendees: MockPlaceUser[] = [
                { email: 'john@test.com', name: 'John Doe' },
                { email: 'jane@test.com', name: 'Jane Doe' },
            ];
            const host: MockPlaceUser = {
                email: 'host@test.com',
                name: 'Host User',
            };
            const result = formatAttendees(attendees as any, host as any);
            expect(result).toContain('3 Attendees');
            expect(result).toContain('Host User');
        });

        it('should remove host from attendee list if present', () => {
            const host: MockPlaceUser = {
                email: 'john@test.com',
                name: 'John Doe',
            };
            const attendees: MockPlaceUser[] = [
                { email: 'john@test.com', name: 'John Doe' },
                { email: 'jane@test.com', name: 'Jane Doe' },
            ];
            const result = formatAttendees(attendees as any, host as any);
            expect(result).toContain('2 Attendees');
        });

        it('should return empty string for empty list', () => {
            expect(formatAttendees([])).toBe('');
        });

        it('should return empty string for null list', () => {
            expect(formatAttendees(null as any)).toBe('');
        });
    });

    describe('formatAttendeesWithHost', () => {
        it('should return a function that formats attendees with the host', () => {
            const host: MockPlaceUser = {
                email: 'host@test.com',
                name: 'Host User',
            };
            const formatter = formatAttendeesWithHost(host as any);
            expect(typeof formatter).toBe('function');

            const attendees: MockPlaceUser[] = [
                { email: 'john@test.com', name: 'John Doe' },
            ];
            const result = formatter(attendees as any);
            expect(result).toContain('Host User');
        });
    });

    describe('formatDate', () => {
        it('should format date correctly', () => {
            // January 15, 2024
            const date = new Date(2024, 0, 15).getTime();
            const result = formatDate(date);
            expect(result).toBe('15 January 2024');
        });

        it('should format different months correctly', () => {
            // December 25, 2023
            const date = new Date(2023, 11, 25).getTime();
            const result = formatDate(date);
            expect(result).toBe('25 December 2023');
        });

        it('should format first day of month', () => {
            const date = new Date(2024, 5, 1).getTime();
            const result = formatDate(date);
            expect(result).toBe('01 June 2024');
        });

        it('should format last day of month', () => {
            const date = new Date(2024, 1, 29).getTime();
            const result = formatDate(date);
            expect(result).toBe('29 February 2024');
        });
    });

    describe('formatTime', () => {
        it('should format afternoon time correctly', () => {
            // 2:30 PM
            const date = new Date(2024, 0, 15, 14, 30).getTime();
            const result = formatTime(date);
            expect(result).toBe('2:30 PM');
        });

        it('should format morning time correctly', () => {
            // 9:15 AM
            const date = new Date(2024, 0, 15, 9, 15).getTime();
            const result = formatTime(date);
            expect(result).toBe('9:15 AM');
        });

        it('should format midnight correctly', () => {
            const date = new Date(2024, 0, 15, 0, 0).getTime();
            const result = formatTime(date);
            expect(result).toBe('12:00 AM');
        });

        it('should format noon correctly', () => {
            const date = new Date(2024, 0, 15, 12, 0).getTime();
            const result = formatTime(date);
            expect(result).toBe('12:00 PM');
        });
    });

    describe('formatPeriod', () => {
        it('should format period with default 60 minute duration', () => {
            const result = formatPeriod('09:00');
            expect(result).toContain('9:00 AM');
            expect(result).toContain('10:00 AM');
            expect(result).toContain('60 minutes');
        });

        it('should format period with custom duration', () => {
            const result = formatPeriod('14:00', 30);
            expect(result).toContain('2:00 PM');
            expect(result).toContain('2:30 PM');
            expect(result).toContain('30 minutes');
        });

        it('should format period spanning AM to PM', () => {
            const result = formatPeriod('11:30', 60);
            expect(result).toContain('11:30 AM');
            expect(result).toContain('12:30 PM');
            expect(result).toContain('60 minutes');
        });
    });

    describe('formatPeriodWithDuration', () => {
        it('should return a curried function', () => {
            const formatter = formatPeriodWithDuration(30);
            expect(typeof formatter).toBe('function');
        });

        it('should format period when curried function is called', () => {
            const formatter = formatPeriodWithDuration(45);
            const result = formatter('10:00');
            expect(result).toContain('10:00 AM');
            expect(result).toContain('10:45 AM');
            expect(result).toContain('45 minutes');
        });
    });

    describe('formatDuration', () => {
        it('should format 60 minutes', () => {
            // date-fns formatDuration with { minutes: 60 } returns '60 minutes'
            // not '1 hour' - it doesn't auto-convert units
            const result = formatDuration(60);
            expect(result).toContain('60 minutes');
        });

        it('should format 30 minutes', () => {
            expect(formatDuration(30)).toContain('30 minutes');
        });

        it('should format 90 minutes', () => {
            const result = formatDuration(90);
            // date-fns formatDuration doesn't auto-convert to hours
            expect(result).toContain('90 minutes');
        });

        it('should format 0 minutes', () => {
            // date-fns formatDuration returns empty string for 0
            const result = formatDuration(0);
            expect(typeof result).toBe('string');
        });
    });

    describe('RECURRENCE_PERIODS', () => {
        it('should contain expected periods', () => {
            expect(RECURRENCE_PERIODS).toContain('None');
            expect(RECURRENCE_PERIODS).toContain('Daily');
            expect(RECURRENCE_PERIODS).toContain('Weekly');
            expect(RECURRENCE_PERIODS).toContain('Monthly');
            expect(RECURRENCE_PERIODS).toContain('Yearly');
        });

        it('should have 5 periods', () => {
            expect(RECURRENCE_PERIODS.length).toBe(5);
        });
    });

    describe('formatRecurrence', () => {
        it('should return "No recurrence" for null value', () => {
            expect(formatRecurrence(null as any)).toBe('No recurrence');
        });

        it('should return "No recurrence" for undefined value', () => {
            expect(formatRecurrence(undefined as any)).toBe('No recurrence');
        });

        it('should return "No recurrence" for period 0 (None)', () => {
            expect(formatRecurrence({ period: 0, end: 0 })).toBe(
                'No recurrence',
            );
        });

        it('should return "No recurrence" for no period', () => {
            expect(formatRecurrence({ period: '', end: 0 })).toBe(
                'No recurrence',
            );
        });

        it('should format daily recurrence with end date', () => {
            const end_date = new Date(2024, 0, 31).getTime(); // January 31, 2024
            const result = formatRecurrence({ period: 1, end: end_date });
            expect(result).toContain('Daily');
            expect(result).toContain('until 31 Jan 2024');
        });

        it('should format weekly recurrence forever', () => {
            const result = formatRecurrence({ period: 2, end: 0 });
            expect(result).toContain('Weekly');
            expect(result).toContain('forever');
        });

        it('should format monthly recurrence', () => {
            const result = formatRecurrence({ period: 3, end: 0 });
            expect(result).toContain('Monthly');
        });

        it('should format yearly recurrence', () => {
            const result = formatRecurrence({ period: 4, end: 0 });
            expect(result).toContain('Yearly');
        });

        it('should handle string period value', () => {
            const result = formatRecurrence({ period: 'Custom', end: 0 });
            expect(result).toContain('Custom');
            expect(result).toContain('forever');
        });

        it('should return "No recurrence" for out of range period', () => {
            expect(formatRecurrence({ period: 10, end: 0 })).toBe(
                'No recurrence',
            );
        });
    });
});

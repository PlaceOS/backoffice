/** Sorted IANA timezone names that the browser supports. Used for timezone autocomplete. */
export const TIMEZONES_IANA: readonly string[] =
    Intl.supportedValuesOf('timeZone');

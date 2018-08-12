
import { AppService } from './app.service';
import { SettingsService } from './settings.service';
import { DATA_SERVICES } from './data';

export const SERVICES: any[] = [
    AppService,
    SettingsService,
    ...DATA_SERVICES
];


import { AppShellComponent } from './shell.component';
import { SHELL_COMPONENTS } from './components';
import { AppAboutComponent } from './about/about.component';

export const APP_COMPONENTS: any[] = [
    AppShellComponent,
    AppAboutComponent,
    ...SHELL_COMPONENTS
];

export const APP_ENTRY_COMPONENTS: any[] = [

];

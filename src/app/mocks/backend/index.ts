import './domains.mock';
import './drivers.mock';
import './groups.mock';
import './modules.mock';
import './repositories.mock';
import './systems.mock';
import './triggers.mock';
import './users.mock';
import './zones.mock';

import './admin.mock';
import './auth-sources.mock';
import './general.mock';
import './metadata.mock';
// Settings are made from the items above, so import it after them
import './settings.mock';
import './staff-api.mock';

// Matches any `systems/:id/:module` path, so it must be last
import './system-control.mock';

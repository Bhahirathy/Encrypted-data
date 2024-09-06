// pages/font-awesome.ts

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
// import other icon sets if needed, like fab for brand icons
// import { fab } from '@fortawesome/free-brands-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';

// This ensures the CSS of Font Awesome is not automatically added, reducing CSS conflicts
config.autoAddCss = false; 

// Add the icons to the library
library.add(fas);
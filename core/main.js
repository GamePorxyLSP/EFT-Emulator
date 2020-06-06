"use strict";

/* show name in window */
process.stdout.setEncoding('utf8');
process.title = "Maoci Emulator";

/* load server components */
require('./initializer.js');
watermark.show();
server.start();

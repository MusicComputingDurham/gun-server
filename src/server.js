// server.js  (minimal GUN relay)
const express = require('express');
const Gun      = require('gun');

const app  = express();
const port = process.env.PORT || 8080;   // <-- important on Render

app.use(Gun.serve);
const server = app.listen(port, () =>
  console.log(`✓ Relay live on port ${port}`)
);

Gun({ web: server });

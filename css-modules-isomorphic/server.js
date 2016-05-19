
// Don't need reset since we're not generating a bundle, but this is required
import 'css-modules-require-hook/preset';
// hook({ generateScopedName: '[name]__[local]___[hash:base64:5]' });

// Server Stuff
import http from 'http';
import express from 'express';
import compression from 'compression';


// React
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server'; // need to render to string instead


// Components
import Header from './components/header/header';


const app = express();
app.use(express.static(`${process.cwd()}/build`))
app.use(compression());
app.set('port', 3000);


app.use((req, res, next) => {
  const html = `<!DOCTYPE html>
  <html>
    <head>
      <link rel="stylesheet" href="/bundle.css">
    </head>
    <body>
      <main id="root">
        ${renderToStaticMarkup(<Header />)}
      </main>
      <script src="/bundle.js"></script>
    </body>
  </html>`;
  res.status(200).send(html);
});


const server = http.createServer(app);
server.listen(app.get('port'));

server.on('listening', function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? addr : addr.port;
  console.log(`Listening on http:\/\/localhost:${bind}`);
});

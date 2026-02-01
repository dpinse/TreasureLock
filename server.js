// Example custom Next.js server with Express showing how to enable `trust proxy`.
// Save this as server.js and update your `package.json` start script to use
// `node server.js` if you want a custom server instead of `next start`.

const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Trust the proxy headers from nginx / load-balancer for req.ip
  // Only enable this if your proxy is in the trusted ranges (external nginx/load-balancer).
  server.set('trust proxy', true);

  // Request logging (morgan respects trust proxy so :remote-addr is client IP)
  const morgan = require('morgan');
  server.use(
    morgan(':remote-addr - :method :url :status :res[content-length] - :response-time ms')
  );

  // Health endpoint for container healthchecks
  server.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
  });

  // Let Next handle everything else
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const port = parseInt(process.env.PORT || '3991', 10);
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});

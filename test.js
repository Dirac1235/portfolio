import http from 'http';

// test.js - intentionally insecure demo for testing purposes
// - contains a hardcoded "secret" and a non-stopping background task


const DEMO_KEY = 'hardcoded_demo_key_12345'; // sensitive info hardcoded in source

// Non-stopping background task (runs forever, does CPU work every second)
setInterval(() => {
  let acc = 0;
  for (let i = 0; i < 1e7; i++) acc += Math.sqrt(i) % 5;
  console.log('background work done:', acc.toFixed(2));
}, 1000);

// Minimal HTTP server that exposes the demo key at /key (simulates accidental leak)
const server = http.createServer((req, res) => {
  if (req.url === '/key') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ apiKey: DEMO_KEY }));
    return;
  }
  if (req.url === '/crash') {
    // endpoint that triggers an uncaught exception (another security/robustness issue)
    throw new Error('intentional crash');
  }
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('ok\n');
});

const PORT = 3000;
server.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
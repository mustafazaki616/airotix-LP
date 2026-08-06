const http = require('http');

const req = http.get('http://localhost:3001/api/health', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    console.log('Response:', data);
  });
});

req.on('error', (e) => {
  console.log('Error:', e.message);
});

req.setTimeout(3000, () => {
  console.log('Timeout: Server not responding (is the server running on port 3001?)');
  req.destroy();
});
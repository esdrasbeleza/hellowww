import * as os from 'os';
import * as http from 'http';

const hostname = os.hostname();
const port = 80;

const server = http.createServer((_, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end("[TypeScript] Hello from " + hostname);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });


import * as os from 'os';
import * as http from 'http';

const hostname = os.hostname();
const port = 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end("[TypeScript] Hello from " + hostname);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });


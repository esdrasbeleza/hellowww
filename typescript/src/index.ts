import * as os from 'os';
import * as http from 'http';

const host = os.hostname();
const port = 80;

http.createServer((_, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end("[TypeScript] Hello from " + host);
}).listen(port, () => {
    console.log(`Server running at http://${host}:${port}/`);
});


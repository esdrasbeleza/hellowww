import * as http from 'http';
import * as os from 'os';

const host = os.hostname();
const port = 80;

http.createServer((_, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end(`[TypeScript] Welcome to ${host}!`);
}).listen(port, () => {
    console.log(`Server running at http://${host}:${port}/`);
});

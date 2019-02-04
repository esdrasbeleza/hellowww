"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var http = __importStar(require("http"));
var os = __importStar(require("os"));
var host = os.hostname();
var port = 80;
http.createServer(function (_, res) {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end("[TypeScript] Welcome to " + host + "!");
}).listen(port, function () {
    console.log("Server running at http://" + host + ":" + port + "/");
});

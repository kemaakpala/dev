const http = require('http');
const keepAliveAgent = new http.Agent({keepAlive: true});
const hostname = '127.0.0.1';
const port = 3000;

let onResponseCallback = () => {console.log('hello')}
let options= {agent: keepAliveAgent};
http.request(options, onResponseCallback);

const server = http.createServer((req, res )=> {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Set-Cookie', ['type=cookie1', 'language=javascript']);
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});


/* //http.Agent
An Agent is responsible for managing connection persistence and reuse for HTTP clients. 
It maintains a queue of pending requests for a given host and port, reusing a single socket connection for each until the queue is empty, 
at which time the socket is either destroyed or put into a pool where it is kept to be used again for requests to the same host and port. 
Whether it is destroyed or pooled depends on the keepAlive
*/
// let options = {
//     hostname: 'localhost',
//     port: 3000,
//     path: '/',
//     agent: true //create a new agent just for one request
// };

// http.get(options, (res) => {
//     console.log('do stuff');
// }).on('socket', (socket)=>{
//     console.log('agentRemove');
//     socket.emit('agentRemove');
// });

// console.log(agent.getName({
//     host: '127.0.0.1',
//     port: 3000,
//     localAddress: ''
// }));
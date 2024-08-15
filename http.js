const http = require('http');
const fs = require('fs');
const { parse } = require('url');

const userList = [
    { name: "fuad" },
    { name: "aju" },
    { name: "saju" },
    { name: "basi" },

]

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    switch (req.url) {
        case ('/'):
            fs.readFile('text.txt', 'utf-8', (err, data) => {
                if (err) throw err;
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(data);
            })
            break;

        case ('/product'):
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(userList));
            break;

        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('this page not found');
            break;
    }
})

const PORT = 3000
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const http = require('http');
const { parse } = require('url');

const userList = [
    { name: "fuad" },
    { name: "aju" },
    { name: "saju" },
    { name: "basi" },

]

const server = http.createServer((req, res) => {
    console.log(req.url);
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(userList));
})

const PORT = 3000
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

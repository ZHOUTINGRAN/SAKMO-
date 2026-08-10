/* 樱茉序 Sakmo Magazine — 静态文件服务器 */
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, 'jasakura');
const PORT = 8080;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.pdf': 'application/pdf'
};

const server = http.createServer((req, res) => {
  let filePath = req.url.split('?')[0];
  if (filePath === '/') filePath = '/index.html';
  /* 解码 URL 编码的路径（支持中文文件名和空格，如"通道 No.4.webp"） */
  filePath = decodeURIComponent(filePath);
  const fullPath = path.join(ROOT, filePath);
  const ext = path.extname(fullPath).toLowerCase();
  const type = MIME[ext] || 'application/octet-stream';

  fs.readFile(fullPath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found: ' + filePath);
    } else {
      res.writeHead(200, { 'Content-Type': type });
      res.end(data);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Sakmo Magazine running at http://localhost:${PORT}/`);
  console.log(`Document root: ${ROOT}`);
});

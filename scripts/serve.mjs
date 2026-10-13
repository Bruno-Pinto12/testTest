import {createServer} from 'node:http';
import {readFile, stat} from 'node:fs/promises';
import {extname, resolve, sep} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = resolve(fileURLToPath(new URL('../', import.meta.url)));
const port = Number(process.env.PORT || 8000);
const contentTypes = new Map([
  ['.css', 'text/css; charset=utf-8'],
  ['.html', 'text/html; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.md', 'text/markdown; charset=utf-8'],
  ['.pdf', 'application/pdf'],
  ['.txt', 'text/plain; charset=utf-8'],
]);

const server = createServer(async (request, response) => {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, {Allow: 'GET, HEAD'});
    response.end();
    return;
  }

  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
  } catch {
    response.writeHead(400);
    response.end('Bad request');
    return;
  }

  const requestedPath = pathname === '/' ? '/index.html' : pathname;
  const filePath = resolve(root, `.${requestedPath}`);
  if (filePath !== root && !filePath.startsWith(`${root}${sep}`)) {
    response.writeHead(403);
    response.end('Forbidden');
    return;
  }

  try {
    const details = await stat(filePath);
    if (!details.isFile()) {
      response.writeHead(404);
      response.end('Not found');
      return;
    }
    const content = await readFile(filePath);
    response.writeHead(200, {
      'Content-Length': content.length,
      'Content-Type': contentTypes.get(extname(filePath).toLowerCase()) || 'application/octet-stream',
      'X-Content-Type-Options': 'nosniff',
    });
    response.end(request.method === 'HEAD' ? undefined : content);
  } catch (error) {
    const status = error.code === 'ENOENT' || error.code === 'ENOTDIR' ? 404
      : error.code === 'EACCES' ? 403
        : 500;
    response.writeHead(status);
    response.end(status === 404 ? 'Not found' : status === 403 ? 'Forbidden' : 'Internal server error');
    if (status === 500) console.error(`Failed to serve ${pathname}:`, error);
  }
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Scrum quiz available at http://127.0.0.1:${port}`);
});

import http from 'http';
import setHeaders from './utils/http.utils/setHeaders.http.util.js';
import HttpHandler from './api/httpHandler.api/HttpHandler.class.js';

const server = http.createServer();

// listen for requests
server.on('request', (req, res) => {
  setHeaders(res);

  switch (req.method) {
    case 'GET':
      HttpHandler(req, res).get();
      break;
    case 'POST':
      HttpHandler(req, res).post();
      break;
    case 'PUT':
      HttpHandler(req, res).put();
      break;
    case 'DELETE':
      HttpHandler(req, res).delete();
      break;
    case 'OPTIONS':
      res.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type,Authorization',
      });
      res.end();
      break;
    default:
      res.end('Not a valid Http request');
  }
});

// listen for errors
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error('Address in use, retrying...');
    setTimeout(() => {
      server.close();
      server.listen(process.env.PORT, process.env.HOST);
    }, 1000);
  }
});

// server listening
server.listen(process.env.PORT, process.env.HOST, () => {
  console.log(
    `Server is running... http://${process.env.HOST}:${process.env.PORT}`
  );
});

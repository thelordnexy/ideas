import http from 'http';
import setHeaders from './utils/http.utils/__setHeaders.http.util.js';
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
      setHeaders(res);
      res.statusCode = 204;
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

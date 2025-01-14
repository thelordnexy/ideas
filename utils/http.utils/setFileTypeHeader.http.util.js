export default function setFileTypeHeader($req, $res) {
  if (/\.html/.test($req.url)) {
    return $res.writeHead(200, {
      'Content-Type': 'text/html',
    });
  } else if (/\.css/.test($req.url)) {
    return $res.writeHead(200, {
      'Content-Type': 'text/css',
    });
  } else if (/\.js/.test($req.url)) {
    return $res.writeHead(200, {
      'Content-Type': 'text/javascript',
    });
  }
}

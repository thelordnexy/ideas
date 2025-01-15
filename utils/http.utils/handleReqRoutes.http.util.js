import resolveFilePath from '../resolveFilePath.util.js';

export default function handleReqRoutes($req, $res) {
  if ($req.url === '/') {
    return resolveFilePath('/public/pages.public/index.html');
  } else if (/^\/\S*\./.test($req.url)) {
    return resolveFilePath($req.url);
  } else {
    $res.end('path not defined');
  }
}

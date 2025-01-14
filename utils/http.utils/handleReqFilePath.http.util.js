import resolveFilePath from '../resolveFilePath.util.js';

export default function handleReqFilePath($req) {
  if ($req.url === '/') {
    return resolveFilePath('/public/pages.public/index.html');
  } else if (/^\/\S*/.test($req.url)) {
    return resolveFilePath($req.url);
  }
}

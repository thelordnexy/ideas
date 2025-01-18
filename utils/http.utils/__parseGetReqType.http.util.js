export default function parseGetReqType($req) {
  if (/\$host/.test($req.url)) {
    return 'hostAddress';
  } else return !/\?/.test($req.url) ? 'file' : 'dbQuery';
}

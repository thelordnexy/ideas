export default function parseGetReqType($req) {
  return !/\?/.test($req.url) ? 'file' : 'dbQuery';
}

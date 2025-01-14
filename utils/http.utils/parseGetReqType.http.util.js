export default function parseGetReqType($req) {
  if (!/\?/.test($req.url)) {
    return {
      reqType: 'file',
    };
  } else {
    return {
      reqType: 'dbQuery',
    };
  }
}

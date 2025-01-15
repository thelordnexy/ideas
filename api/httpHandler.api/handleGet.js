import parseGetReqType from '../../utils/http.utils/parseGetReqType.http.util.js';
import FilesHandler from '../filesHandler.api/FilesHandler.class.js';
import setFileTypeHeader from '../../utils/http.utils/setFileTypeHeader.http.util.js';
import handleReqRoutes from '../../utils/http.utils/handleReqRoutes.http.util.js';
import handleErrors from '../../utils/handleErrors.util.js';

export default async function handlGet($req, $res) {
  try {
    const reqType = parseGetReqType($req); // see if the request is for a file or database record.

    if (reqType.reqType === 'file') {
      //handle file requests
      const filePath = handleReqRoutes($req, $res);
      const fileData = await FilesHandler(filePath)();

      setFileTypeHeader($req, $res);
      $res.end(fileData);
    } else if (reqType.reqType === 'dbQuery') {
      //handle database request
      $res.end('Database Requests cannot be performed at the moment.');
    }
  } catch (err) {
    //handle errors
    if (err) {
      handleErrors($res, `Http error: ${err}`);
    }
  }
}

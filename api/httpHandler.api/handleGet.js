import parseGetReqType from '../../utils/http.utils/parseGetReqType.http.util.js';
import handleReqFilePath from '../../utils/http.utils/handleReqFilePath.http.util.js';
import FilesHandler from '../filesHandler.api/FilesHandler.class.js';
import setFileTypeHeader from '../../utils/http.utils/setFileTypeHeader.http.util.js';

export default async function handlGet($req, $res) {
  try {
    const reqType = parseGetReqType($req);

    if (reqType.reqType === 'file') {
      const filePath = handleReqFilePath($req);
      const fileHandler = new FilesHandler(filePath);
      const fileData = await fileHandler.getFile();

      setFileTypeHeader($req, $res);
      $res.end(fileData);
    } else if (reqType.reqType === 'dbQuery') {
      $res.end('Database Requests cannot be performed at the moment.');
    }
  } catch (err) {
    if (err) throw new Error(err);
  }
}

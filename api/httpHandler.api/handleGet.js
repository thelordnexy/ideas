import parseGetReqType from '../../utils/http.utils/__parseGetReqType.http.util.js';
import FilesHandler from '../filesHandler.api/FilesHandler.class.js';
import setFileTypeHeader from '../../utils/http.utils/__setFileTypeHeader.http.util.js';
import handleReqRoutes from '../../utils/http.utils/__handleReqRoutes.http.util.js';
import handleErrors from '../../utils/__handleErrors.util.js';
import handleDbQuery from '../../utils/http.utils/__handleDbQuery.http.util.js';
import DatabaseHandler from '../databaseHandler.api/DatabaseHandler.class.js';
import getHostAddress from '../../utils/http.utils/__getHostAddress.http.util.js';

export default async function handlGet($req, $res) {
  try {
    const reqType = parseGetReqType($req); // see if the request is for a file or database record.

    if (reqType === 'file') {
      //handle file requests
      const filePath = handleReqRoutes($req, $res);
      const fileData = await FilesHandler(filePath)();

      setFileTypeHeader($req, $res);
      $res.end(fileData);
    } else if (reqType === 'dbQuery') {
      $res.writeHead(200, {
        'Content-Type': 'application/json',
      });

      //handle database request
      const dbQueryOptions = handleDbQuery($req);
      if (dbQueryOptions.qName === 'getIdeas') {
        if (dbQueryOptions.qValue === 'all') {
          const data = await DatabaseHandler().getIdeas();
          $res.end(JSON.stringify(data[0]));
        } else {
          const data = await DatabaseHandler().getIdea(
            Number(dbQueryOptions.qValue)
          );
          $res.end(JSON.stringify(data[0]));
        }
      } else {
        throw new Error('Invalid api request');
      }
    } else if (reqType === 'hostAddress') {
      //get host ip
      const address = getHostAddress();
      $res.end(address);
    }
  } catch (err) {
    //handle errors
    if (err) {
      handleErrors($res, `Http error: ${err}`);
    }
  }
}

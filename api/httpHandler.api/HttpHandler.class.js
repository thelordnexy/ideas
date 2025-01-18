import handlGet from './handleGet.js';

export default function HttpHandler($req, $res) {
  return {
    get() {
      handlGet($req, $res);
    },
    post() {
      console.log($req.body)
      $res.end($req.body);
    },
    put() {
      $res.end('Entry edited successfully');
    },
    delete() {
      $res.end('Entry deleted successfully');
    },
  };
}

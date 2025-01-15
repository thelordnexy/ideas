import handlGet from './handleGet.js';

export default function HttpHandler($req, $res) {
  return {
    get() {
      handlGet($req, $res);
    },
    post() {
      $res.end('Entry Added successfully');
    },
    put() {
      $res.end('Entry edited successfully');
    },
    delete() {
      $res.end('Entry deleted successfully');
    },
  };
}

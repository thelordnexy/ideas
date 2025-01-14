import handlGet from "./handleGet.js";

export default class HttpHandler {
  constructor($req, $res) {
    this.req = $req;
    this.res = $res;
  }

  get() {
    handlGet(this.req,this.res);
  }
  post() {
    this.res.end('Entry Added successfully');
  }
  put() {
    this.res.end('Entry edited successfully');
  }
  delete() {
    this.res.end('Entry deleted successfully');
  }
}

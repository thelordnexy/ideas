export default function handleErrors($res, $error) {
  //handle errors related to requests made.
  $res.end(`404 Error: Resource not found`);
  console.error($error);
}

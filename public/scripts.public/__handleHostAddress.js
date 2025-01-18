export default function handleHostAddress(
  getDataCallback = null,
  postDataCallback = null,
  displayDatacallback = null,
  $formdata = null,
  rootElement
) {
  fetch('/$host')
    .then((response) => {
      if (!response) throw new Error(`HTTP error! status: ${response.status}`);
      return response.text();
    })
    .then((hostAddress) => {
      getDataCallback
        ? getDataCallback('127.0.0.1', displayDatacallback, rootElement)
        : postDataCallback($formdata, '127.0.0.1');
    })
    .catch((err) => console.error('Error:', err));
}

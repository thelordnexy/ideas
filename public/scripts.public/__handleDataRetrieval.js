export default function handleDataRetrieval(
  hostAddress,
  displayDatacallback,
  rootElement
) {
  fetch(`http://${hostAddress}:3000/?getIdeas=all`)
    .then((response) => response.json())
    .then((data) => displayDatacallback(data, rootElement));
}

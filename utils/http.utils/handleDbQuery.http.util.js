export default function handleDbQuery($req) {
  const [name, value] = $req.url.slice(2).split('=');
  return {
    qName: name,
    qValue: value,
  };
}

export default function handleSubmitForm(formData, hostAddress) {
  if (formData.name === 'Invalid' || formData.description === 'Invalid')
    return alert('One or more of your inputs are invalid!');
  fetch(`http://${hostAddress}/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (!response) throw new Error(`HTTP error! status: ${response.status}`);
      response.json();
    })
    .then((data) => console.log(data));
}

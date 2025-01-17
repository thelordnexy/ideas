const rootElement = document.getElementById('content-home');

// get all ideas data
fetch('http://192.168.107.180:3000/?getIdeas=all')
  .then((response) => {
    if (!response) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
  })
  .then((data) => {
    addDataToRoot(data);
  })
  .catch((err) => console.error('Error:', err));

//Display ideas
function addDataToRoot(data) {
  const htmlData = data.map((data) => {
    return `
    <div class="idea">
        <h2>${data.name}</h2>
        <p>${data.description}</p>
        <div id="status">
            <span class="completed-name">
            <h3>completed</h3>
                <input type="checkbox" data-idea-id=${data.id} ${data.completed ? 'checked' : ''} name='completed' class='completed'"/>
            </span>
            <span class="favorite-name">
            <h3>favorite</h3>
                <input type="checkbox" data-idea-id=${data.id} ${data.favorite ? 'checked' : ''} name='favorite' class='favorite'"/>
            </span>
        </div>
    </div>
    `;
  });
  rootElement.innerHTML = htmlData.join('');
}
//handle completed and favorite status
document.addEventListener('load', () => {
  const checkBoxesFavorite = document.querySelectorAll('.favorite');
  checkBoxesFavorite.forEach((checkbox) =>
    checkbox.addEventListener('change', (e) => {
      alert('changed');
    })
  );
});

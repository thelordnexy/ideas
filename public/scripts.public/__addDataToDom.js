export default function addDataToDom(data, rootElement) {
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

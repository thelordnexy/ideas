export default function handleModal(createBtn, cancelBtn, section) {
  createBtn.addEventListener('click', () => {
    section.style.display = 'block';
  });

  cancelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    section.style.display = 'none';
  });
}

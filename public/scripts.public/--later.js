//handle completed and favorite status
document.addEventListener('load', () => {
  const checkBoxesFavorite = document.querySelectorAll('.favorite');
  checkBoxesFavorite.forEach((checkbox) =>
    checkbox.addEventListener('change', (e) => {
      alert('changed');
    })
  );
});

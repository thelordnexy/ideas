export default function handleCreateIdea(
  $form = null,
  submitFormCallback = null,
  hostAddress = null
) {
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = {
      name:
        $form['ideaName'].value !== '' ? $form['ideaName'].value : 'Invalid',
      description:
        $form['ideaDescription'].value !== ''
          ? $form['ideaDescription'].value
          : 'Invalid',
    };

    hostAddress(null, submitFormCallback, null, formData, null);
  });
}

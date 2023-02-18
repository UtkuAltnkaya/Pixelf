const modal = document.getElementById('modal');
const openModal = document.getElementById('open-modal');
const modalContainer = document.getElementById('modal-container');
const resultImage = document.getElementById('image-result');
const imageProcess = document.getElementById('image-process');

openModal.addEventListener('click', () => {
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  modal.classList.add('modal');
  modalContainer.classList.add('modal-container');

  const image = new Image();
  image.src = 'image/bg.png';

  if (image.src) {
    const imageWidth = image.width;
    const imageHeight = image.height;

    image.style.height = `${100 - 100 * (1 - imageHeight / imageWidth)}%`;
    image.style.width = `${100 - 100 * (1 - imageWidth / imageHeight)}%`;
    imageProcess.appendChild(image);
  }
});

// modal.addEventListener('click', () => {
//   modal.classList.remove('modal');
// });

const modal = document.getElementById('modal');
const openModal = document.getElementById('open-modal');
const modalContainer = document.getElementById('modal-container');
const resultImage = document.getElementById('image-result');
const imageProcess = document.getElementById('image-result-container');
const closeModalButton = document.getElementById('close-modal');

let palette; // document.querySelectorAll('.palette');
let selectedColorPaletteIndex = 0;
let modalIsOpenOnce = false;
const image = new Image();

openModal.addEventListener('click', (event) => {
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  modal.classList.add('modal');
  modalContainer.classList.add('modal-container');

  window.addEventListener('click', clickedOutSide); //To detect user clicked outside
  window.addEventListener('keydown', pressedEsc); //To detect user pressed esc

  if (!modalIsOpenOnce) {
    createColorPalette();
    selectColorPalette();
  }

  loadImage();
  modalIsOpenOnce = true;
});

closeModalButton.addEventListener('click', () => {
  closeModal();
});

const createColorPalette = () => {
  const palettes = document.getElementById('color-palette-select');
  for (let i = 0; i < colors.length; i++) {
    let options = `<div class="palette">`;
    for (let j = 0; j < colors[i].length; j++) {
      options += `<div class="color" style="background-color:rgb(${colors[i][j][0]},${colors[i][j][1]},${colors[i][j][2]})"></div>`;
    }
    options += `</div>`;
    palettes.innerHTML += options;
  }
};

const loadImage = () => {
  image.src = 'image/bg.png';
  if (image.src) {
    const imageWidth = image.width;
    const imageHeight = image.height;

    image.style.maxHeight = '100%';
    image.style.maxWidth = '100%';
    image.style.height = `${100 - 100 * (1 - imageHeight / imageWidth)}%`;
    image.style.width = `${100 - 100 * (1 - imageWidth / imageHeight)}%`;

    if (image.style.height >= 100) {
      image.style.height = '100%';
    }
    if (image.style.width >= 100) {
      image.style.width = '100%';
    }
    image.style.borderRadius = '5px';
    imageProcess.appendChild(image);
  }
};

const selectColorPalette = () => {
  palette = document.querySelectorAll('.palette');
  for (let i = 0; i < palette.length; i++) {
    palette[i].addEventListener('click', () => {
      palette[selectedColorPaletteIndex].classList.remove('selected');
      palette[i].classList.add('selected');
      selectedColorPaletteIndex = i;
    });
  }
};

const closeModal = () => {
  modalContainer.style.animationName = 'close-animation';
  modalContainer.style.animationDuration = '400ms';
  document.body.style.overflow = 'auto';

  window.removeEventListener('click', clickedOutSide);
  window.removeEventListener('keydown', pressedEsc);

  //Runs after closing animation finished
  setTimeout(() => {
    modal.style.display = 'none';
    modal.classList.remove('modal');
    modalContainer.classList.remove('modal-container');
    modalContainer.style.animationName = '';
    modalContainer.style.animationDuration = '';
    palette[selectedColorPaletteIndex].classList.remove('selected');
    selectedColorPaletteIndex = 0;
  }, 400);
};

const clickedOutSide = (event) => {
  if (event.target.id === 'modal') {
    closeModal();
  }
};

const pressedEsc = (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
};

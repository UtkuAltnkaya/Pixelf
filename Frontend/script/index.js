const modal = document.getElementById('modal');
const openModal = document.getElementById('open-modal');
const modalContainer = document.getElementById('modal-container');
const closeModalButton = document.getElementById('close-modal');
const resultImage = document.getElementById('image-result');
const imageResultContainer = document.getElementById('image-result-container');
const navToggle = document.getElementById("nav-toggle");

let palette; // document.querySelectorAll('.palette');
let selectedColorPaletteIndex = 0;
let modalIsOpenOnce = false;
const image = new Image();

openModal.addEventListener('click', (event) => {
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // prevents scrolling down of the body
  modal.classList.add('modal');
  modalContainer.classList.add('modal-container');

  window.addEventListener('click', clickedOutSide); //To detect user clicked outside
  window.addEventListener('keydown', pressedEsc); //To detect user pressed esc

  if (!modalIsOpenOnce) { // in order to prevent creating color palette every time
    createColorPalette();
    selectColorPalette();
  }

  // loadImage();
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
      // adding each color div to our color palette | last elements [0] , [1] , [2] are representing the rgb values to give inside that color div.
    }
    options += `</div>`;
    palettes.innerHTML += options;
  }
};

const loadImage = (imageSrc) => { // adjusting the width and the height of the image with mathematical calculations
  image.src = imageSrc;
  image.onload = () => {
    image.classList.add("image-result");
    const imageWidth = image.width;
    const imageHeight = image.height;

    image.style.maxHeight = '100%';
    image.style.maxWidth = '100%';

    image.style.height = `${100 - 100 * (1 - imageHeight / imageWidth)}%`;
    image.style.width = `${100 - 100 * (1 - imageWidth / imageHeight)}%`;

    image.style.borderRadius = '5px';
    image.style.display = `block`;
    imageResultContainer.appendChild(image);
  }
};

const selectColorPalette = () => {
  palette = document.querySelectorAll('.palette');
  for (let i = 0; i < palette.length; i++) {
    palette[i].addEventListener('click', () => {
      palette[selectedColorPaletteIndex].classList.remove('selected'); // removing the selected class from the palette that is clicked before
      palette[i].classList.add('selected'); // adding class to the new selected palette
      selectedColorPaletteIndex = i; // keeping the index for the C++ file
      data['-index'] = JSON.stringify(selectedColorPaletteIndex); // making integer a string
    });
  }
  getColorPaletteIndex(); // every time when a color palette selected, and if ColorPalette marked as checked, then new index will be posted
};

const closeModal = () => {
  modalContainer.style.animationName = 'close-animation';
  modalContainer.style.animationDuration = '400ms';
  document.body.style.overflow = 'auto';

  window.removeEventListener('click', clickedOutSide);
  window.removeEventListener('keydown', pressedEsc);

  //Runs after closing animation finished & setting the values to default
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

// Hacker effect
const letters = 'abcdefghijklmnopqrstuvwxyz'; // 26 letters

const hackerEffect = (event) => {
  let iterations = 0; // every time when mouse is over the element with hacker-effect id, iterations is set to 0

  const interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split('')
      .map((letter, index) => {
        if (index < iterations) {
          // if index is smaller than iterations then we will return our original letter
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)]; // else we will return a random letter
      })
      .join('');

    if (iterations >= event.target.dataset.value.length) clearInterval(interval); // To prevent the letters keep changing, we are clearing the interval

    iterations += 1 / 3; // To make it a little bit slower, we are increasing by 1/3
  }, 30);
};

document.getElementById('hacker-effect').onmouseover = hackerEffect;
document.getElementById('hacker-effect').onload = hackerEffect;

// TODO
// document.body.onload = (event) => {
//   hackerEffect(event);
// };

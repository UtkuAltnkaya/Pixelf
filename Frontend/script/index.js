const colors = [
  [
    [47, 91, 132],   // Dark blue
    [106, 161, 182], // Teal
    [240, 177, 97],  // Peach
    [236, 104, 46],  // Orange
    [220, 40, 55],   // Coral
    [146, 41, 54],   // Maroon
    [74, 33, 47],    // Dark purple
    [38, 35, 61]     // Navy blue
  ],
  // Palette 9: Ocean
  [
    [0, 100, 143],   // Deep Blue
    [0, 146, 199],   // Ocean Blue
    [0, 191, 255],   // Sky Blue
    [66, 170, 245],  // Light Blue
    [143, 188, 187], // Seafoam Green
    [204, 216, 176], // Light Green
    [243, 235, 190], // Sand
    [245, 245, 245]  // Light Gray
  ],
  // Palette 11: Forest
  [
    [30, 70, 30],    // Dark Green
    [50, 120, 50],   // Green
    [100, 200, 100], // Light Green
    [130, 180, 130], // Olive Green
    [200, 200, 100], // Yellow Green
    [190, 120, 60],  // Brown
    [220, 200, 190], // Light Brown
  ],
  // Palette 3: Ocean
  [
    [39, 62, 79],    // Dark Blue
    [92, 147, 174],  // Light Blue
    [151, 194, 212], // Blueish White
    [50, 111, 141],  // Deep Teal
    [63, 136, 143],  // Blue Green
    [98, 164, 191],  // Powder Blue
    [102, 137, 154], // Slate Blue
    [139, 185, 215], // Sky Blue
    [75, 103, 115],  // Blue Grey
    [132, 176, 197], // Grey Blue
    [43, 81, 94],    // Deep Blue
    [79, 128, 151]   // Steel Blue
  ],
  // Palette 2: Jewel Tones
  [
    [128, 0, 0],     // Maroon
    [255, 20, 147],  // Deep Pink
    [0, 128, 128],   // Teal
    [50, 205, 50],   // Lime Green
    [218, 165, 32],  // Goldenrod
    [106, 90, 205],  // Slate Blue
    [220, 20, 60],   // Crimson
    [139, 69, 19],   // Saddle Brown
    [238, 130, 238], // Lavender Blush
    [95, 158, 160],  // Cadet Blue
    [240, 230, 140], // Khaki
    [255, 215, 0]    // Gold
  ],
  // Palette 5: Earth Tones
  [
    [222, 184, 135], // Tan
    [218, 165, 32],  // Goldenrod
    [165, 42, 42],   // Brown
    [139, 69, 19],   // Saddle Brown
    [188, 143, 143], // Rosy Brown
    [244, 164, 96],  // Sandy Brown
    [205, 133, 63],  // Peru
    [160, 82, 45],   // Sienna
    [128, 128, 0],   // Olive
    [128, 0, 0],     // Maroon
    [139, 69, 19],   // Saddle Brown
    [165, 42, 42]    // Brown
  ],
  // Palette 6: Ocean
  [
    [65, 105, 225],  // Royal Blue
    [0, 191, 255],   // Deep Sky Blue
    [0, 128, 128],   // Teal
    [70, 130, 180],  // Steel Blue
    [0, 139, 139],   // Dark Cyan
    [46, 139, 87],   // Sea Green
    [25, 25, 112],   // Midnight Blue
    [0, 0, 205],     // Medium Blue
    [176, 196, 222], // Light Steel Blue
    [0, 191, 255],   // Deep Sky Blue
    [30, 144, 255],  // Dodger Blue
    [70, 130, 180]   // Steel Blue
  ],
  [
    [0, 0, 0],     // Black
    [255, 0, 0],   // Red
    [255, 165, 0], // Orange
    [255, 255, 0], // Yellow
    [0, 128, 0],   // Dark green
    [0, 255, 0],   // Green
    [0, 0, 255],   // Blue
    [128, 0, 128]  // Purple
  ],
  // Palette 4: Desert Dream
  [
    [213, 144, 92],  // Tan
    [228, 190, 128], // Khaki
    [247, 228, 150], // Light yellow
    [182, 209, 176], // Sage green
    [144, 175, 152], // Green-gray
    [197, 174, 148], // Beige
    [207, 147, 120], // Rust
    [123, 101, 97]   // Brown-gray
  ],

  // Palette 8: Rainbow
  [
    [255, 0, 0],    // Red
    [255, 127, 0],  // Orange
    [255, 255, 0],  // Yellow
    [0, 255, 0],    // Green
    [0, 0, 255],    // Blue
    [75, 0, 130],   // Indigo
    [143, 0, 255],  // Violet
    [255, 255, 255] // White
  ],

  // Palette 11: Forest
  [
    [30, 70, 30],    // Dark Green
    [50, 120, 50],   // Green
    [100, 200, 100], // Light Green
    [130, 180, 130], // Olive Green
    [200, 200, 100], // Yellow Green
    [190, 120, 60],  // Brown
    [220, 200, 190], // Light Brown
  ],
  [
    [7, 5, 5],
    [33, 25, 25],
    [82, 58, 42],
    [138, 107, 62],
    [193, 156, 77],
    [234, 219, 116],
    [160, 179, 53],
    [83, 124, 68],
    [66, 60, 86],
    [89, 111, 175],
    [107, 185, 182],
    [251, 250, 249],
    [184, 170, 176],
    [121, 112, 126],
    [148, 91, 40],
  ],
  [
    [13, 43, 69],
    [32, 60, 86],
    [84, 78, 104],
    [141, 105, 122],
    [208, 129, 89],
    [255, 170, 94],
    [255, 212, 163],
    [255, 236, 214],
  ],
  [
    [43, 15, 84],
    [171, 31, 101],
    [255, 79, 105],
    [255, 247, 248],
    [255, 129, 66],
    [255, 218, 69],
    [51, 104, 220],
    [73, 231, 236],
  ],
  [
    [48, 0, 48],
    [96, 40, 120],
    [248, 144, 32],
    [248, 240, 136],
  ],
  [
    [239, 26, 26],
    [172, 23, 23],
    [243, 216, 216],
    [177, 139, 139],
    [53, 52, 65],
    [27, 26, 29],
  ],
  [
    [26, 28, 44],
    [93, 39, 93],
    [177, 62, 83],
    [239, 125, 87],
    [255, 205, 117],
    [167, 240, 112],
    [56, 183, 100],
    [37, 113, 121],
    [41, 54, 111],
    [59, 93, 201],
    [65, 166, 246],
    [115, 239, 247],
    [244, 244, 244],
    [148, 176, 194],
    [86, 108, 134],
    [51, 60, 87],
  ],
  [
    [44, 33, 55],
    [118, 68, 98],
    [237, 180, 161],
    [169, 104, 104],
  ],
  [
    [171, 97, 135],
    [235, 198, 134],
    [216, 232, 230],
    [101, 219, 115],
    [112, 157, 207],
    [90, 104, 125],
    [33, 30, 51],
  ],
  [
    [140, 143, 174],
    [88, 69, 99],
    [62, 33, 55],
    [154, 99, 72],
    [215, 155, 125],
    [245, 237, 186],
    [192, 199, 65],
    [100, 125, 52],
    [228, 148, 58],
    [157, 48, 59],
    [210, 100, 113],
    [112, 55, 127],
    [126, 196, 193],
    [52, 133, 157],
    [23, 67, 75],
    [31, 14, 28],
  ],
  [
    [94, 96, 110],
    [34, 52, 209],
    [12, 126, 69],
    [68, 170, 204],
    [138, 54, 34],
    [235, 138, 96],
    [0, 0, 0],
    [92, 46, 120],
    [226, 61, 105],
    [170, 92, 61],
    [255, 217, 63],
    [181, 181, 181],
    [255, 255, 255],
  ],
  [
    [49, 31, 95],
    [22, 135, 167],
    [31, 213, 188],
    [237, 255, 177],
  ],
  [
    [21, 25, 26],
    [138, 76, 88],
    [217, 98, 117],
    [230, 184, 193],
    [69, 107, 115],
    [75, 151, 166],
    [165, 189, 194],
    [255, 245, 247],
  ]]

const modal = document.getElementById('modal');
const openModal = document.getElementById('open-modal');
const modalContainer = document.getElementById('modal-container');
const resultImage = document.getElementById('image-result');
const imageProcess = document.getElementById('image-result-container');

openModal.addEventListener('click', () => {
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  modal.classList.add('modal');
  modalContainer.classList.add('modal-container');

  const image = new Image();
  image.src = 'image/output1.jpg';

  if (image.src) {
    const imageWidth = image.width;
    const imageHeight = image.height;

    image.style.maxHeight = `${100}%`;
    image.style.maxWidth = `${100}%`;
    image.style.height = `${100 - 100 * (1 - imageHeight / imageWidth)}%`;
    image.style.width = `${100 - 100 * (1 - imageWidth / imageHeight)}%`;

    if (100 - 100 * (1 - imageHeight / imageWidth) >= 100) {
      image.style.height = `${100}%`;
    }
    if (100 - 100 * (1 - imageWidth / imageHeight) >= 100) {
      image.style.width = `${100}%`;
    }

    image.style.borderRadius = "5px";
    imageProcess.appendChild(image);
  }
  colorPaletteSelect();
});

const colorPaletteSelect = () => {
  const palettes = document.getElementById('color-palette-select');

  for (let i = 0; i < colors.length; i++) {

    let options = `<div class="palette">`;

    for (let j = 0; j < colors[i].length; j++) {
      options += `<div class="color" style="background-color:rgb(${colors[i][j][0]},${colors[i][j][1]},${colors[i][j][2]})"></div>`;
    }

    options += `</div>`;
    palettes.innerHTML += options;
  }

  let palette = document.querySelectorAll('.palette');
  let tempIndex = 0;

  for (let i = 0; i < palette.length; i++) {
    palette[i].addEventListener('click', () => {
      palette[tempIndex].classList.remove('selected');
      palette[i].classList.add('selected');
      tempIndex = i;
    });
  }
}


// modal.addEventListener('click', () => {
//   modal.classList.remove('modal');
// });

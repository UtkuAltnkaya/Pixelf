const styleInput = document.getElementById('style-input');
const blockSizeInput = document.getElementById('block-size-input');
const grayScaleInput = document.getElementById('gray-scale-input');
const kMeansInput = document.getElementById('kmeans-input');
const clusterInput = document.getElementById('cluster-input');
const colorPaletteInput = document.getElementById('color-palette-input');
const colorPaletteSelectInput = document.getElementById('color-palette-select');
const form = document.getElementById('form');
const imageResultContainer = document.getElementById('image-process');

const data = {
  '-fileName': 'b.jpg',
  '-interIndex': '0',
  '-blockSize': '8',
  '-grayScale': 'false',
  '-kmeans': 'false',
  '-cluster': '12',
  '-colorPalette': 'false',
  '-index': '0',
};

const getInput = () => {
  styleInput.addEventListener('change', () => {
    if (styleInput.value !== '') {
      data['-interIndex'] = styleInput.value;
    }
  });
  blockSizeInput.addEventListener('input', (event) => {
    data['-blockSize'] = event.target.value;
  });
  grayScaleInput.addEventListener('change', (event) => {
    data['-grayScale'] = JSON.stringify(event.currentTarget.checked);
  });
  kMeansInput.addEventListener('change', (event) => {
    data['-kmeans'] = JSON.stringify(event.currentTarget.checked);
  });
  clusterInput.addEventListener('input', (event) => {
    data['-cluster'] = event.target.value;
  });
  colorPaletteInput.addEventListener('change', (event) => {
    data['-colorPalette'] = JSON.stringify(event.currentTarget.checked);
  });
  form.addEventListener('change', () => {
    postInputs();
  });
};
getInput();

const getColorPaletteIndex = () => {
  colorPaletteSelectInput.addEventListener('click', () => {
    if (data['-colorPalette'] === 'true') {
      postInputs();
    }
  });
};

const postInputs = () => {
  fetch('http://localhost:3000/image-process', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((data) => console.log(data));
};

imageResultContainer.addEventListener('dragover', (e) => {
  e.preventDefault();
  imageResultContainer.classList.add('dragover');
});

imageResultContainer.addEventListener('dragleave', (e) => {
  e.preventDefault();
  imageResultContainer.classList.remove('dragover');
});

imageResultContainer.addEventListener('drop', (e) => {
  e.preventDefault();
  imageResultContainer.classList.remove('dragover');
  const file = e.dataTransfer.files[0];
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    // const url = URL.createObjectURL(file);
    // console.log(url);
    data['-fileName'] = file.name;
    loadImage(reader.result);

    const imageFormData = new FormData();

    imageFormData.append('image', file);

    fetch('http://localhost:3000/upload-image', {
      method: 'POST',
      body: imageFormData,
    });
  });
  if (file) {
    reader.readAsDataURL(file);
  }
});

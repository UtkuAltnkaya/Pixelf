const styleInput = document.getElementById('style-input');
const blockSizeInput = document.getElementById('block-size-input');
const grayScaleInput = document.getElementById('gray-scale-input');
const kMeansInput = document.getElementById('kmeans-input');
const clusterInput = document.getElementById('cluster-input');
const colorPaletteInput = document.getElementById('color-palette-input');
const colorPaletteSelectInput = document.getElementById('color-palette-select');
const form = document.getElementById('form');
const imagePro = document.getElementById('image-process');
const download = document.getElementById('download');
const uploadAni = document.getElementById("upload-animation");

// data object
const data = {
  '-fileName': '',
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
      data['-interIndex'] = styleInput.value; // 0 , 1 , 2
    }
  });
  blockSizeInput.addEventListener('input', (event) => {
    data['-blockSize'] = event.target.value; // getting the blockSize value that is entered
  });
  grayScaleInput.addEventListener('change', (event) => {
    data['-grayScale'] = JSON.stringify(event.currentTarget.checked); // checkbox
  });
  kMeansInput.addEventListener('change', (event) => {
    data['-kmeans'] = JSON.stringify(event.currentTarget.checked); // checkbox
  });
  clusterInput.addEventListener('input', (event) => {
    data['-cluster'] = event.target.value; // number input
  });
  colorPaletteInput.addEventListener('change', (event) => {
    data['-colorPalette'] = JSON.stringify(event.currentTarget.checked);
  });
  form.addEventListener('change', () => {
    // if there is a change in the form, then post the inputs
    postInputs();
  });
};
getInput();

const getColorPaletteIndex = () => {
  // if color palette is activated and the element with id 'color-palette-select' is clicked, post inputs (real-time input change)
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
  }).then(() => {
    const url = `http://localhost:3000/output/${data['-fileName']}`;
    fetch(url).then((u) => {
      loadImage(url);
      download.download = data['-fileName'];
      download.href = url;
    });
  });
};

imageResultContainer.addEventListener('dragover', (e) => {
  e.preventDefault();
  // Prevent the default behavior of the dragover event (which is to not allow dropping)
  imageResultContainer.classList.add('dragover');
});

imageResultContainer.addEventListener('dragleave', (e) => {
  // Prevent the default behavior of the dragleave event
  e.preventDefault();
  imageResultContainer.classList.remove('dragover');
});

imageResultContainer.addEventListener('drop', (e) => {
  // Add a drop event listener to the imageResultContainer element
  e.preventDefault(); // Prevent the default behavior of the drop event (which is to navigate to the dropped file)

  if (imageResultContainer.classList.contains("dragover")) {
    imageResultContainer.classList.remove("upload-image");
    imageResultContainer.removeChild(uploadAni);
  }


  imageResultContainer.classList.remove('dragover');
  const file = e.dataTransfer.files[0]; // Get the dropped file from the dataTransfer object
  const reader = new FileReader(); // Create a FileReader object to read the contents of the dropped file (JavaScript feature)
  reader.addEventListener('load', () => {
    // Add a load event listener to the FileReader object, which will be triggered when the file has finished loading
    data['-fileName'] = file.name;
    loadImage(reader.result); // Call the loadImage function with the loaded file data

    const imageFormData = new FormData();

    imageFormData.append('image', file); // image is just the name

    fetch('http://localhost:3000/upload-image', {
      method: 'POST',
      body: imageFormData,
    });
  });
  if (file) {
    reader.readAsDataURL(file);
  }
});

// Get all the color swatch buttons
const colorSwatches = document.querySelectorAll('.color-swatch__button');
// Get the umbrella image element
const umbrellaImage = document.querySelector('.umbrella-preview__image');
// Get the customizer element
const customizer = document.querySelector('.customizer');
// Get the upload button element
const uploadButton = document.getElementById("logo-upload");
// Get the spinner element for the umbrella image preview
const spinner = document.getElementById('umbrella-preview__spinner');
// Get the input element for the logo upload
const logoInput = document.getElementById('logo-upload__input');
// Get the spinner element for the logo preview
const logoSpinner = document.getElementById('umbrella-preview__spinner');
// Get the logo preview element
const logoPreview = document.querySelector('.logo-preview');
// Get the image element inside the logo preview
const logoImgPreview = logoPreview.querySelector('#logo-preview__image');

// Loop through each color swatch button and add a click event listener to it
colorSwatches.forEach(button => {
  button.addEventListener("click", () => {
    // Get the color value of the clicked button
    const colorValue = button.dataset.color;
    // Display the spinner and set the opacity of the umbrella and logo image previews to 0
    spinner.style.display = 'block';
    umbrellaImage.style.opacity = '0';
    logoImgPreview.style.opacity = '0';
    logoImgPreview.style.display = 'none';
    // Load the new umbrella image after a 500ms delay to simulate loading time
    setTimeout(function () {
      umbrellaImage.src = `umbrella-${colorValue.slice(1)}.png`;
      spinner.style.display = 'none';
      umbrellaImage.style.opacity = '1';
      logoImgPreview.style.opacity = '1';
      logoImgPreview.style.display = 'block';
    }, 500); // 500 desired loading time in milliseconds


// Change the background color of the customizer div based on the selected color
    if (colorValue == "#pink") {
      customizer.style.backgroundColor = "#f7cbe1f2";
    } else if (colorValue == "#yellow") {
      customizer.style.backgroundColor = "#f7f0bf";
    } else {
      customizer.style.backgroundColor = "#e1f5f9";
    }
    // Change the background color of the upload logo button based on the selected color
    // and set the color of the spinner based on the selected color
    if (colorValue == "#pink") {
      uploadButton.style.backgroundColor = "#ff69b4";
      spinner.style.setProperty('--loader-color', '280deg');

    } else if (colorValue == "#yellow") {
      uploadButton.style.backgroundColor = "#ffcc00";
      spinner.style.setProperty('--loader-color', '330deg');

    } else {
      uploadButton.style.backgroundColor = "#39bdf6";
      spinner.style.setProperty('--loader-color', '150deg');
    }

  });
});



function selectColor(button) {
  // Remove "selected" class from all buttons
  var buttons = document.querySelectorAll(".color-swatch__button");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("selected");
  }

  // Add "selected" class to selected button
  button.classList.add("selected");
}

// Add a function to preview the logo
function previewLogo(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  // Display spinner and hide umbrella image
  logoPreview.style.display = 'none';
  logoImgPreview.style.display = 'none';
  logoSpinner.style.display = 'block';
  umbrellaImage.style.opacity = '0';

  // Show preview after 2 seconds
  setTimeout(() => {
    reader.onload = function () {
      const dataURL = reader.result;
      logoImgPreview.src = dataURL;
      logoImgPreview.alt = 'uploaded logo';

      // Hide spinner and show umbrella image and logo preview
      logoSpinner.style.display = 'none';
      umbrellaImage.style.opacity = '1';
      logoPreview.style.display = 'block';
      logoImgPreview.style.opacity = '1';
      logoImgPreview.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }, 2000);



  var input = event.target;
  var uploadIcon = document.getElementById('upload-icon');
  var spinner = document.getElementById('logo-upload__spinner');
  var logoUpload = document.getElementById('logo-upload');

  uploadIcon.style.display = 'none';
  spinner.style.display = 'block';

  //  creating a model of loading time
  setTimeout(function () {
    uploadIcon.style.display = 'block';
    spinner.style.display = 'none';
  }, 2000);
}



// Attach the event listener to the logo input
logoInput.addEventListener('change', previewLogo);

// Get the file input element and the label element
var logoUploadInput = document.getElementById('logo-upload__input');
var logoUploadLabel = document.getElementById('logo-upload__label');

// Add an event listener to the file input element
logoUploadInput.addEventListener('change', function () {
  // Get the selected file
  var selectedFile = logoUploadInput.files[0];

  // Update the label text to display the selected file name
  logoUploadLabel.innerHTML = selectedFile.name;
});




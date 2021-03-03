//module.exports = function () {
let dropArea = document.getElementById('drop-area');
/*
dropArea.addEventListener('dragenter', handlerFunction, false);
dropArea.addEventListener('dragleave', handlerFunction, false);
dropArea.addEventListener('dragover', handlerFunction, false);
dropArea.addEventListener('drop', handlerFunction, false);
*/

//Adding The Drag-And-Drop Functionality
['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
  dropArea.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}
['dragenter', 'dragover'].forEach((eventName) => {
  dropArea.addEventListener(eventName, highlight, false);
});
['dragleave', 'drop'].forEach((eventName) => {
  dropArea.addEventListener(eventName, unhighlight, false);
});

function highlight(e) {
  dropArea.classList.add('highlight');
}

function unhighlight(e) {
  dropArea.classList.remove('highlight');
}

dropArea.addEventListener('drop', handleDrop, false);

function handleDrop(e) {
  let dt = e.dataTransfer;
  let files = dt.files;

  handleFiles(files);
}

// function handleFiles(files) {
//   [...files].forEach(uploadFile); // Metodo original
// }

function handleFiles(files) {
  [...files].forEach(ValidateSize);
}

function ValidateSize(files) {
  let FileSize = files.size / 1024 / 1024; // in MiB
  if (FileSize > 1) {
    alert('File size exceeds 1 MiB');
    // $(file).val(''); //for clearing with Jquery
  } else {
    uploadFile(files);
  }
}

function uploadFile(files) {
  let url = ''; //console.log(file);
  let formData = new FormData();

  formData.append('file', files);

  fetch(url, {
    method: 'POST',
    body: formData,
  })
    .then(() => {
      console.log('file uploaded');
      console.log(file);
      /* Done. Inform the user */
    })
    .catch(() => {
      console.log('some error happened uploading the file');
      /* Error. Inform the user */
    });
}
//};

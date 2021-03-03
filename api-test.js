const ocrSpaceApi = require('ocr-space-api');

var options = {
  apikey: 'a5264a27b288957',
  language: 'spa', // Spanish
  imageFormat: 'image/png', // Image Type (Only png ou gif is acceptable at the moment i wrote this)
  isOverlayRequired: true,
  verbose: false,
};

// Image file to upload
const imageFilePath = 'img/test-img.png';

// Run and wait the result
ocrSpaceApi
  .parseImageFromLocalFile(imageFilePath, options)
  .then(function (parsedResult) {
    console.log('parsedText: \n', parsedResult.parsedText);
    console.log('ocrParsedResult: \n', parsedResult.ocrParsedResult);
  })
  .catch(function (err) {
    console.log('ERROR:', err);
  });

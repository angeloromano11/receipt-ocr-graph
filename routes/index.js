const express = require('express');
const controller = require('../controllers/calls');

const router = express.Router();

//Test response
/*
changeText = () => {
  const testRes = document.getElementById('testResponse').innerText;
  if (click() === true) {
    testRes = 'Hello send test Response';
  }
};

click = () => {
  const button = document.getElementsByClassName('button');
  button.addEventListener('click');
  return true;
};
*/
/* GET home page. */
router.get('/', controller.getPost);
router.get('/test', controller.sendJson);
router.get('/data', controller.sendData);
router.get('/list', controller.showData);

module.exports = router;

const express = require('express');
const router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
   res.sendFile('index.html', {
          root: 'src/public/html'
       }
       );
});

module.exports = router;
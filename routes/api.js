var express = require('express');
var router = express.Router();
var Bear     = require('../models/bear');
//var controllers = require('../controllers')]
var bearController = require('../controllers/bear');

var router = express.Router();              // get an instance of the express Router


router.route('/bears')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {
      bearController.save(req, res)
    })
    .get(function(req, res) {
       bearController.see(req, res)
    });

module.exports = router;

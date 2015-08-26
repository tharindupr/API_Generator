var express = require('express');
var router = express.Router();
var Bear     = require('../models/bear');
var Song     = require('../models/song');
//var controllers = require('../controllers')]
var bearController = require('../controllers/bear');
var songController = require('../controllers/song');
var router = express.Router();              // get an instance of the express Routers


router.route('/bears')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {
    	
      bearController.save(req, res)
    })
    .get(bearController.see);


 router.route('/bears/:id')

 	.get(function(req, res) {
       bearController.get(req, res)
    });


router.route('/songs')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {
      songController.save(req, res)
    })

    .get(function(req, res) {
       songController.see(req, res)
    });




module.exports = router;



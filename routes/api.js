var express = require('express');
var router = express.Router();
var songController = require('../controllers/song');
var songController = require('../controllers/song');



var bearController = require('../controllers/bear');
router.route('/songs')





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



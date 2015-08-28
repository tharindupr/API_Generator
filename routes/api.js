var express = require('express');
var router = express.Router();
var songController = require('../controllers/song');





router.route('/songs')
var bearController = require('../controllers/bear');
	.get(songController.see)

	.post(function(req, res) {
	songController.save(req, res)
	});








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






module.exports = router;



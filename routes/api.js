var express = require('express');
var router = express.Router();
var songController = require('../controllers/song');

router.route('/songs')

	.post(function(req, res) {
	songController.save(req, res)
	})
	.get(songController.see);

router.route('/songs/:songId')

	.put(function(req, res) {
	songController.updatesongId(req, res)
	})
	.get(songController.getsongId)
	.delete(function(req, res) {
	songController.deletesongId(req, res)
	});

router.route('/songs/:name')

	.get(songController.getname);


module.exports = router;
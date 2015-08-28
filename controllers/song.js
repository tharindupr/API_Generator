var Song = require('../models/song');

exports.save = function (req, res) {
var song= new Song();
song.name=req.body.name;
song.artist=req.body.artist;
song.save(function(err) {
if (err) res.send(err);
res.json({ message: 'created!' });
});
};

exports.see = function(req, res) {
Song.find(function(err, val) {
if (err)
	res.send(err);
		res.json(val);
}); 
};

exports.getsongId = function(req, res) {
	Song.find({ 'songId':  req.params.songId }, function (err, rcd) {
		if (err) console.log(err);
		res.json(rcd);
	});
};




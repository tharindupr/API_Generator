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

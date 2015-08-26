var mongoose     = require('mongoose');
var Schema= mongoose.Schema;
var SongSchema   = new Schema({
name:String,
artist:String
});
module.exports = mongoose.model('Song', SongSchema);
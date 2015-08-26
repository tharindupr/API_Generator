var mongoose     = require('mongoose');
var Schema= mongoose.Schema;
var songsSchema   = new Schema({
name:String
artist:String
});
module.exports = mongoose.model('songs', songsSchema+);
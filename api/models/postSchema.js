var mongoose =require('mongoose');

var postSchema = mongoose.Schema({
  userID: Number,
  name: String,
  username: String,
  post: String
});

module.exports = mongoose.model('ListPost', postSchema);

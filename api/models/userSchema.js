var mongoose =require('mongoose');

var userSchema = mongoose.Schema({
  userID: Number,
  name: String,
  username: String
});

module.exports = mongoose.model('ListUser', userSchema);

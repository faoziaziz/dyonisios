/*
  Ini untuk bagian ke user
*/


const User = require('../models/userSchema.js');

// Create and Save a new Note
exports.insertUser = (req, res) => {

  if(!req.body.userID) {
      return res.status(400).send({
          message: "Note content can not be empty"
      });
  }
    // Create a Note
   const user = new User({
        userID: req.body.userID,
        name: req.body.name,
        username: req.body.username
    });

    // Save Note in the database
    user.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });

};


// Find a single note with a userID
exports.cariSatu = (req, res) => {
    User.findById(req.params.userID)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "id " + req.params.userID+" gak ketemu"
            });
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.userID
            });
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.userID
        });
    });
};


exports.tampilDetail=(req, res)=>{
  var userID = req.param('userID');
  var name = req.param('name');
  if(userID==null && name==null){
    User.find()
    .then(users=>{
      res.send(users)
      }).catch(err=>{
        res.status(500).send({
            message: err.message || "Sial eror"
        });
      });
    }
  else if(userID!=null){
    User.findOne({"userID":req.param('userID')},  function(err, user){

      res.send(user);
    });
  }
  else if(name!=null){
    User.findOne({"name":req.param('name')},  function(err, user){
      res.send(user);
    });
  }
  /*
  else if(req.param('sort')!=null){
    if (req.param('sort')=="price_low"){
      Book.find({}).sort({priceIDR: 'asc'}).exec(function(err, user){
        res.send(user);
      });

    }
    else if(req.param('sort')=="price_high"){
      Book.find({}).sort({priceIDR: 'desc'}).exec(function(err, user){
        res.send(user);
      });
    }
  }
  */

};


exports.kalistaTest=(req, res)=>{
  res.send("Anjir");
}

exports.cariJudul = (req, res)=>{

};

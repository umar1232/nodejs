const sanitizeHTML = require('sanitize-html');

const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/');

const messageSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true        
        },
        password:{
            type:String,
            required:true        
        }
    },
    {string:'throw'}
);

const Message = mongoose.model(
    'messages',
    messageSchema
);

//const newMessage = new Message(
  //  {username: 'test', text: 'test2'});

module.exports = function(url,callback){
  //const mongoose = require('mongoose');
  mongoose.connect(url,callback);

  /*const Message = mongoose.model(
    'messages',
    {}
  );*/

  return {
    create:function(newMessage,callback){
      //callback();
    
        var message = new Message(newMessage);
        message.save(callback);
    },
    read:function(id,callback){
      //callback();
        Message.findById(id,callback);
    },
    readUsername:function(username,callback){
      //callback();
        message.find({username,username},callback);
    },
    readAll:function(callback){
      //callback();
        Message.find({}, callback);
    },
    update:function(id,updatedMessage,callback){
      //callback();
        Message.findByIdAndUpdate(id, updatedMessage, callback);
    },
    delete:function(id,callback){
     // callback();
        Message.findByIdAndRemove(id, callback);
    },
    deleteAll:function(callback){
      Message.remove({},callback);
    },
    disconnect:function(){
      mongoose.disconnect();
    }
  };
};

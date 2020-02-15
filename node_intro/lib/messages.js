const sanitizeHTML = require('sanitize-html');

const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/');

const Message = mongoose.model(
    'messages',
    {username:String, text:String, _id:String}
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
      callback();
    },
    readAll:function(callback){
      callback();
    },
    update:function(id,updatedMessage,callback){
      callback();
    },
    delete:function(id,callback){
      callback();
    },
    deleteAll:function(callback){
      Message.remove({},callback);
    },
    disconnect:function(){
      mongoose.disconnect();
    }
  };
};

const mongoose = require("mongoose");

const notificationSchema =
new mongoose.Schema({

    userId:{
        type:String,
        required:true
    },

    userType:{
        type:String,
        enum:["vendor","supplier"],
        required:true
    },

    title:{
        type:String,
        required:true
    },

    message:{
        type:String,
        required:true
    },

    isRead:{
        type:Boolean,
        default:false
    },

    createdAt:{
        type:Date,
        default:Date.now
    }
});

module.exports =

mongoose.models.notification ||

mongoose.model(
    "notification",
    notificationSchema
);
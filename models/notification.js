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

    type:{
        type:String,
        default:"general",
        index:true
    },

    category:{
        type:String,
        default:"general",
        index:true
    },

    metadata:{
        type:mongoose.Schema.Types.Mixed,
        default:{}
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

notificationSchema.index({createdAt:1},{expireAfterSeconds:7 * 24 * 60 * 60});
notificationSchema.index({userId:1,userType:1,isRead:1,createdAt:-1});

module.exports =

mongoose.models.notification ||

mongoose.model(
    "notification",
    notificationSchema
);

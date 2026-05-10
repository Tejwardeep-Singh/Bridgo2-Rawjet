const mongoose = require("mongoose");

const notificationSchema =
new mongoose.Schema({

    userType:{

        type:String,

        enum:[
            "vendor",
            "supplier"
        ],

        required:true
    },

    userId:{
        type:String,
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

    link:{
        type:String
    },

    isRead:{

        type:Boolean,

        default:false
    }

},{
    timestamps:true
});

module.exports =
mongoose.model(
    "Notification",
    notificationSchema
);
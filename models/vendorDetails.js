const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({

    vendorId: {
        type: String,
        required: true,
        unique: true
    },

    name:{
        type:String,
    },

    password: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    gst: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    area: {
        type: String,
        required: true,
        trim:true
    },

    city: {
        type: String,
        required: true,
        lowercase:true,
        trim:true,
        index:true
    },

    state: {
        type: String,
        required: true,
        lowercase:true,
        trim:true
    },

    location:{

        type:{
            type:String,
            enum:["Point"],
            default:"Point"
        },

        coordinates:{
            type:[Number],
            default:[0,0]
        }
    }

});

vendorSchema.index({
    location:"2dsphere"
});

const Vendor =
mongoose.model(
    'Vendor',
    vendorSchema
);

module.exports = Vendor;
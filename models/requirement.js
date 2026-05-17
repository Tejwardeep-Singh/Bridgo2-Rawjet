const mongoose = require('mongoose');

const requirementSchema = new mongoose.Schema({

    vendorId: {
        type: String,
        required: true
    },

    vendorName: {
        type: String,
        required: true
    },

    vendorPhone: {
        type: String,
        required: true
    },

    vendorEmail: {
        type: String,
        required: true
    },

    vendorAddress: {
        type: String,
        required: true
    },

    city: {
        type: String
    },

    itemName: {
        type: String,
        required: true
    },

    requirement: {
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },

    additionalNotes: {
        type: String
    },
    area:{
    type:String
},

state:{
    type:String
},

location:{

    type:{
        type:String,

        enum:["Point"],

        default:"Point"
    },

    coordinates:{
        type:[Number],

        required:true
    }
},
    status: {
        type: String,
        enum: ['pending', 'in_progress', 'completed', 'cancelled'],
        default: 'pending'
    },

    supplierResponses: [

        {
            supplierId: {
                type: String
            },

            supplierName: String,

            supplierPhone: String,

            supplierEmail: String,

            supplierLocation: String,

            message: String,

            proposedPrice: Number,

            proposedQuantity: Number,

            deliveryEstimate: String,

            responseStatus: {
                type: String,
                enum: ['pending', 'accepted', 'rejected'],
                default: 'pending'
            },

            paymentStatus: {
                type: String,
                enum: ['pending', 'paid'],
                default: 'pending'
            },

            responseTime: {
                type: Date,
                default: Date.now
            }
        }

    ]

}, {
    timestamps: true
});
requirementSchema.index({

    location:"2dsphere"
});
module.exports =

mongoose.models.Requirement ||

mongoose.model(
    "Requirement",
    requirementSchema
);
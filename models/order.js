const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

    vendorId: {
        type: String,
        required: true
    },

    vendorName: {
        type: String,
        required: true
    },

    supplierId: {
        type: String,
        required: true
    },

    supplierName: {
        type: String,
        required: true
    },

    requirementId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Requirement"
    },

    responseId: {
        type: mongoose.Schema.Types.ObjectId
    },

    itemName: {
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },

    amount: {
        type: Number,
        required: true
    },

    orderStatus: {

        type: String,

        enum: [
            "created",
            "processing",
            "completed",
            "cancelled"
        ],

        default: "created"
    },

    paymentStatus: {

        type: String,

        enum: [
            "pending",
            "paid"
        ],

        default: "pending"
    }

}, {
    timestamps: true
});

module.exports =
    mongoose.model("Order", orderSchema);
const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({

    // ================= CUSTOMER DETAILS =================
    customerName: {

        type: String,
        required: true

    },

    customerEmail: {

        type: String,
        required: true

    },

    customerPhone: {

        type: String,
        required: true

    },

    customerAddress: {

        type: String,
        required: true

    },


    // ================= PAYMENT DETAILS =================
    paymentMethod: {

        type: String,
        required: true

    },

    cardName: {

        type: String,
        default: ""

    },

    cardNumber: {

        type: String,
        default: ""

    },

    cardExpiry: {

        type: String,
        default: ""

    },


    // ================= ORDER ITEMS =================
    items: [

        {

            id: Number,

            name: String,

            category: String,

            price: Number,

            qty: Number,

            desc: String,

            img: String

        }

    ],


    // ================= TOTAL =================
    total: {

        type: Number,
        required: true

    },


    // ================= ORDER STATUS =================
    orderStatus: {

        type: String,
        default: "Pending"

    },


    // ================= CREATED DATE =================
    createdAt: {

        type: Date,
        default: Date.now

    }

});

module.exports = mongoose.model("Order", OrderSchema);

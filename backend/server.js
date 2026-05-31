const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const User = require("./models/User");
const Order = require("./models/Order");

const app = express();

app.use(cors());
app.use(express.json());


// ================= DATABASE =================
mongoose.connect("mongodb://127.0.0.1:27017/realkkcafe")
.then(() => {

    console.log("MongoDB Connected");

})
.catch((err) => {

    console.log(err);

});


// ================= HOME =================
app.get("/", (req, res) => {

    res.send("Server Running");

});


// ================= SIGNUP =================
app.post("/signup", async (req, res) => {

    try {

        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if(existingUser){

            return res.json({

                success: false,
                message: "User Already Exists"

            });

        }

        const newUser = new User({

            name,
            email,
            password

        });

        await newUser.save();

        res.json({

            success: true,
            message: "Signup Successful"

        });

    }

    catch(error){

        console.log(error);

        res.json({

            success: false,
            message: "Signup Error"

        });

    }

});


// ================= LOGIN =================
app.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({

            email,
            password

        });

        if(user){

            res.json({

                success: true,
                message: "Login Successful"

            });

        }

        else{

            res.json({

                success: false,
                message: "Invalid Credentials"

            });

        }

    }

    catch(error){

        console.log(error);

        res.json({

            success: false,
            message: "Login Error"

        });

    }

});


// ================= CHECKOUT =================
app.post("/checkout", async (req, res) => {

    try {

        console.log("CHECKOUT API HIT");

        console.log(req.body);

        const {

            customerName,
            customerEmail,
            customerPhone,
            customerAddress,

            paymentMethod,

            cardName,
            cardNumber,
            cardExpiry,

            items,
            total

        } = req.body;


        // ================= VALIDATION =================
        if (!items || items.length === 0) {

            return res.status(400).json({

                success: false,
                message: "Cart is Empty"

            });

        }


        // ================= CREATE ORDER =================
        const newOrder = new Order({

            customerName,
            customerEmail,
            customerPhone,
            customerAddress,

            paymentMethod,

            cardName,
            cardNumber,
            cardExpiry,

            items,
            total,

            orderStatus: "Pending"

        });


        // ================= SAVE =================
        await newOrder.save();


        // ================= RESPONSE =================
        res.json({

            success: true,
            message: "Order Placed Successfully"

        });

    }

    catch(error){

        console.error("Checkout Error:", error);

        res.status(500).json({

            success: false,
            message: "Checkout Failed",
            error: error.message

        });

    }

});


// ================= SERVER =================
app.listen(5000, () => {

    console.log("Server Running on Port 5000");

});
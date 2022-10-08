require("dotenv").config();
const mongoose = require("mongoose");

function connectDB() {
    // Database Connection
    mongoose.connect(process.env.MONGO_CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const connection = mongoose.connection;

    connection.once("open", () => {
        console.log("Database Connected!");
    });

    connection.on("error", () => {
        console.log("Connection Failed!!");
    });
}

module.exports = connectDB;
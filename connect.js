const mongoose = require("mongoose");

const connectoToDB = async() => {
    mongoose.connect("mongodb://127.0.0.1:27017/api", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    mongoose.connection
        .once("open", () => console.log("connected to MongoDB Database"))
        .on("error", error => console.log("database connection error: ", error));
}

module.exports = connectoToDB;
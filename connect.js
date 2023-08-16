const mongoose = require("mongoose");

const connectoToDB = async() => {
    mongoose.connect("mongodb+srv://akshay:akshay@cluster0.chjo92h.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    mongoose.connection
        .once("open", () => console.log("connected to MongoDB Database"))
        .on("error", error => console.log("database connection error: ", error));
}

module.exports = connectoToDB;
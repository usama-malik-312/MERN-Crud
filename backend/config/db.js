const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => console.log("Mongo DB Connection Successful"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;

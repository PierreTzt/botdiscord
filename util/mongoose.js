const mongoose = require("mongoose");
const { DBCONNECTION } = require("../config");

module.exports = {
  init: () => {
    const mongOptions = {
      useNewUrlPerser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      autoIndex: false,
      poolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      family: 4
    }

    mongoose.connect(DBCONNECTION, mongOptions);
    mongoose.Promise = global.Promise;
    mongoose.connection.on("connected", () => console.log("Mongoose est connecté!"));
  }
}
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WeatherSchema = new Schema({
   main: {
      type: String,
      required: true
   },
   description: {
      type: String,
   },
   temp: {
      type: String,
   },
});
module.exports = mongoose.model("weather", WeatherSchema);
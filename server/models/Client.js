const mongoose = require("mongoose");

const { Schema } = mongoose;

const clientSchema = new Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    minlength: 10,
  },
  message: {
    type: String,
    required: true,
  },
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;

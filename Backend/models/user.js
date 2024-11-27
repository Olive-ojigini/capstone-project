const mongoose = require("mongoose");
const schema=mongoose.schema;

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
} )


module.exports = mongoose.model("User", UserSchema);

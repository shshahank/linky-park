import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        maxlength: 50,
        trim: true
    },
    first_name: {
        type: String,
        required: true,
        maxlength: 50,
        trim: true
    },
    last_name: {
        type: String,
        required: true,
        maxlength: 50,
        trim: true
    },
     email : {
    type : String,
    unique : true,
    required : true,
    trim : true
  },
  password: {
    type: String,
    required: true
  }
});


const User = mongoose.model("User", userSchema);

export default User;

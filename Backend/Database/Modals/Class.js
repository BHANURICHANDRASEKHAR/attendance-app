import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    maxlength: 30, 
  },
  email: {
    type: String,
    required: [true, "Please provide a unique email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  branch: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  strength:{
    type: Number,
    default: 0,
  }
});
export default mongoose.model("Students", StudentSchema);

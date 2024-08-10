import mongoose from "mongoose";
const StudentSchema = new mongoose.Schema({
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
  StudentList:{
    type: [Object], 
    default: [],
    required: true,
    unique: false,
  }
});
export default mongoose.model("Students", StudentSchema);

// import mongoose from "mongoose";
// const StudentSchema = new mongoose.Schema({
//   branch: {
//     type: String,
//     required: true,
//   },
//   year: {
//     type: String,
//     required: true,
//   },
//   section: {
//     type: String,
//     required: true,
//   },
//   StudentList:{
//     type: [Object], 
//     default: [],
//     required: true,
//     unique: false,
//   }
// });
// export default mongoose.model("Students", StudentSchema);
import mongoose from "mongoose";

const studentItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
    unique: true,  // Ensures roll numbers are unique within the collection
  },
  totalAttendance: {
    type: Number,
    default: 0,  // Initializes the attendance count to 0
  }
});

// Define the main schema
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
  StudentList: {
    type: [studentItemSchema],  // Array of student objects
    default: [],
    required: true,
  }
});

export default mongoose.model("Students", StudentSchema);

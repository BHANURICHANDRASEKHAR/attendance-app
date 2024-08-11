import mongoose from 'mongoose';

const { Schema } = mongoose;

// Timetable Schema
const TimetableSchema = new Schema({
  subject: { type: String, required: true },
  abbreviation: { type: String },
  faculty: { type: String }
});

// Course Schema
const CourseSchema = new Schema({
  sno: { type: Number, required: true },
  course_code: { type: String, required: true },
  course_title: { type: String, required: true },
  faculty: { type: String }
});

// Main Schema
const TimetableMainSchema = new Schema({
  branch: { type: String, required: true },
  section: { type: String, required: true },
  year: { type: String, required: true },
  semester: { type: String, required: true },
  room: { type: String, required: true },
  dates: { type: String, required: true },
  timetable: {
    MON: [TimetableSchema],
    TUE: [TimetableSchema],
    WED: [TimetableSchema],
    THU: [TimetableSchema],
    FRI: [TimetableSchema],
    SAT: [TimetableSchema]
  },
  courses: [CourseSchema],
  class_teacher: { type: String, required: true },
  counselling_students: { type: String, required: true }
});

// Creating the model from the schema
export default mongoose.model('Timetable', TimetableMainSchema);

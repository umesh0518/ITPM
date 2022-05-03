const mongoose = require("mongoose");

const CourseShema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    min: 1,
    max: 50,
  },
  duration: {
    type: String,
    required: true,
  },
  teacher: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("courses", CourseShema);

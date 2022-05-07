const mongoose = require("mongoose");

const NewNoticesSchema = new mongoose.Schema(
  {
    tasktitle: {
      type: String,
      required: true,
      min: 2,
      max: 450,
    },
    taskdescription: {
      type: String,
      required: true,
      min: 2,
      max: 450,
    },
    teacherid: {
      type: String,
      // required: true,
      min: 2,
      max: 450,
    },
    implevel: {
      type: String,
      trim: true,
    },
    validtill: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      default: "not done",
    },
  },
  { timestamps: true }
);

const NewNotices = mongoose.model("NewNotices", NewNoticesSchema);
module.exports = NewNotices;

const mongoose = require("mongoose");

const WorkoutSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  exercise: [
    {
      type: String,
    },
  ],
  training: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    require: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Workout", WorkoutSchema);

const mongoose = require("mongoose");

const ExerciseSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  nbRep: [
    {
      type: Number,
    },
  ],
  description: {
    type: String,
    require: false,
  },
});

module.exports = mongoose.model("Exercise", ExerciseSchema);

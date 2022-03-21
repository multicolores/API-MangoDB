const mongoose = require("mongoose");

const TrainingSchema = mongoose.Schema({
  exercise: [
    {
      type: String,
    },
  ],
  repetition: [
    {
      type: Array,
    },
  ],
  recuperation: [
    {
      type: String,
    },
  ],
  weight: [
    {
      type: String,
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Training", TrainingSchema);

// const TrainingSchema = mongoose.Schema({
//     exercise: [
//       {
//         name: String,
//         repetition: [{ type: String }],
//         recup: String,
//         poid: String,
//       },
//     ],
//     date: {
//       type: Date,
//       default: Date.now,
//     },
//   });

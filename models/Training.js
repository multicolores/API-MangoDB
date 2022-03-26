const mongoose = require("mongoose");

const TrainingSchema = mongoose.Schema({
  exercise: [
    {
      name: String,
      repetition: Array,
      recuperation: String,
      weight: String,
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

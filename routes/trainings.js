const express = require("express");
const router = express.Router();
const fs = require("fs");
const verify = require("./verifyToken");
const Training = require("../models/Training");

// router.get('/', (req, res) => {
//     fs.readFile('./data.txt', 'utf8' , (err, data) => {
//         if (err) {
//             console.error(err)
//             return
//         }
//         res.status(200).send(data)
//     })
// });

//Get every Exercises
router.get("/", async (req, res) => {
  try {
    const trainings = await Training.find();
    res.json(trainings);
  } catch (err) {
    res.json({ message: err });
  }
});

//Get a Specific Exercise
router.get("/:trainingid", async (req, res) => {
  try {
    const training = await Training.findById(req.params.trainingid);
    res.json(training);
  } catch (err) {
    res.json({ message: err });
  }
});

// Post an Exercise
router.post("/", async (req, res) => {
  const training = new Training({
    exercise: req.body.exercise,
    repetition: req.body.repetition,
    recuperation: req.body.recuperation,
    weight: req.body.weight,
  });
  try {
    const savedtraining = await training.save();
    res.json(training);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delet an Exercise
router.delete("/:trainingid", async (req, res) => {
  try {
    const removeTraining = await Training.deleteOne({
      _id: req.params.trainingid,
    });
    res.json(removeTraining);
  } catch (err) {
    res.json({ message: err });
  }
});

// //Update an Exercise
//TODO look pour patch plusieurs truc a la fois
// router.patch("/:trainingid", async (req, res) => {
//   try {
//     const updatedTraining = await Training.updateOne(
//       { _id: req.params.trainingid },
//       { $set: { name: req.body.name } }
//     );
//     res.json(updatedTraining);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

module.exports = router;

const express = require("express");
const router = express.Router();
const fs = require("fs");
const verify = require("./verifyToken");
const Exercise = require("../models/Exercise");

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
router.get("/", verify, async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.json(exercises);
  } catch (err) {
    res.json({ message: err });
  }
});

//Get a Specific Exercise
router.get("/:exerciseid", async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.exerciseid);
    res.json(exercise);
  } catch (err) {
    res.json({ message: err });
  }
});

// Post an Exercise
router.post("/", async (req, res) => {
  const exercise = new Exercise({
    name: req.body.name,
    nbRep: req.body.nbRep,
    description: req.body.description,
  });
  try {
    const savedexercise = await exercise.save();
    res.json(exercise);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delet an Exercise
router.delete("/:exerciseid", async (req, res) => {
  try {
    const removeExercise = await Exercise.deleteOne({
      _id: req.params.exerciseid,
    });
    res.json(removeExercise);
  } catch (err) {
    res.json({ message: err });
  }
});

//Update an Exercise
router.patch("/:exerciseid", async (req, res) => {
  try {
    const updatedExercise = await Exercise.updateOne(
      { _id: req.params.exerciseid },
      { $set: { name: req.body.name } }
    );
    res.json(updatedExercise);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;

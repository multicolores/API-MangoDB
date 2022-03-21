const express = require("express");
const router = express.Router();
const fs = require("fs");
const Workout = require("../models/Workout");

// router.get('/', (req, res) => {
//     fs.readFile('./data.txt', 'utf8' , (err, data) => {
//         if (err) {
//             console.error(err)
//             return
//         }
//         res.status(200).send(data)
//     })
// });

//Get every workouts
router.get("/", async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.json(workouts);
  } catch (err) {
    res.json({ message: err });
  }
});

//Get a Specific workout
router.get("/:workoutid", async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.workoutid);
    res.json(workout);
  } catch (err) {
    res.json({ message: err });
  }
});

// Post a workout
router.post("/", async (req, res) => {
  const workout = new Workout({
    name: req.body.name,
    exercise: req.body.exercise,
    description: req.body.description,
  });
  try {
    const savedworkout = await workout.save();
    res.json(workout);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delet a workout
router.delete("/:workoutid", async (req, res) => {
  try {
    const removeWorkout = await Workout.deleteOne({
      _id: req.params.workoutid,
    });
    res.json(removeWorkout);
  } catch (err) {
    res.json({ message: err });
  }
});

//Update a workout
router.patch("/:workoutid", async (req, res) => {
  try {
    const updatedWorkout = await Workout.updateOne(
      { _id: req.params.workoutid },
      { $set: { training: req.body.training } }
    );
    res.json(updatedWorkout);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;

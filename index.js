const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;
const fs = require("fs");
const mongoose = require("mongoose");
require("dotenv/config");

app.use(express.json());
app.use(cors());

// Import Routes
const tasksRoute = require("./routes/tasks");
const authRoute = require("./routes/auth");
const workoutRoute = require("./routes/workouts");
const exerciseRoute = require("./routes/exercises");
const trainingRoute = require("./routes/trainings");

app.use("/tasks", tasksRoute);
app.use("/", authRoute);
app.use("/workout", workoutRoute);
app.use("/exercise", exerciseRoute);
app.use("/training", trainingRoute);

app.listen(process.env.PORT || 8080, () => {
  console.log("App available on http://localhost:" + PORT);
});

mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log("connected to the db !")
);

// app.get('/shirt', (req, res) => {
//     fs.readFile('./data.txt', 'utf8' , (err, data) => {
//         if (err) {
//             console.error(err)
//             return
//         }
//         res.status(200).send(data)
//     })
// });

// app.post('/shirt/:id', (req, res) => {
//     const { id } = req.params;
//     const { logo } = req.body;
//     const content = `${id} : ${logo}
// `;
//     if(!logo){
//         res.status(418).send({message: 'we need a logo'})
//     }
//     fs.writeFile('./data.txt', content, { flag: 'a' }, err => {
//         if (err) {
//         console.error(err)
//         return
//         }
//     })
//     res.send({
//         body: content,
//     });
// })

// const content = 'Some content!'

// fs.writeFile('./data.txt', content, err => {
//     if (err) {
//       console.error(err)
//       return
//     }
//     console.log("file written successfully")
//     //file written successfully
//   })

// fs.readFile('./data.txt', 'utf8' , (err, data) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log(data)
// })

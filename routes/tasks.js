const express = require('express');
const router = express.Router();
const fs = require('fs');
const Task = require('../models/Task')

// router.get('/', (req, res) => {
//     fs.readFile('./data.txt', 'utf8' , (err, data) => {
//         if (err) {
//             console.error(err)
//             return
//         }
//         res.status(200).send(data)
//     })
// });

//Get every tasks
router.get('/', async (req, res) => {
    try{
        const tasks = await Task.find();
        res.json(tasks);
    }catch(err){
        res.json({message:err});
    }
})

//Get a Specific task
router.get('/:taskid', async (req, res) => {
    try{
        const task = await Task.findById(req.params.taskid);
        res.json(task);
    } catch(err){
        res.json({message: err});
    }
})

// Post a task
router.post('/', async (req, res) => {
    const task = new Task({
        name: req.body.name,
        description: req.body.description
    });
    try {
        const savedTask = await task.save();
        res.json(savedTask);
    } catch(err){
        res.json({message: err});
    }
})


//Delet a task
router.delete('/:taskid', async (req, res) => {
    try{
        const removeTask = await Task.deleteOne({_id: req.params.taskid});
        res.json(removeTask);
    } catch(err){
        res.json({message: err});
    }
})

//Update a task
router.patch('/:taskid', async (req, res) => {
    try{
        const updatedTask = await Task.updateOne({_id: req.params.taskid}, {$set: {name: req.body.name}});
        res.json(updatedTask);
    } catch(err){
        res.json({message: err});
    }
})


module.exports = router;
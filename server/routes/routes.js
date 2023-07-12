const express = require('express');
const WorkoutModel = require('../models/workoutModel');
const WorkoutController = require('../controllers/workoutController')

const router = express.Router();

router.get('/work_outs', WorkoutController.getWorkouts)
router.get('/work_out/:id', WorkoutController.getWorkout)
router.post('/add_work_out', WorkoutController.createWorkout)
router.put('/update_work_out/:id', WorkoutController.updateWorkout)
router.delete('/delete_work_out/:id', WorkoutController.deleteWorkout)

module.exports = router;
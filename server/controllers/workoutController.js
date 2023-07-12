const WorkoutModel = require('../models/workoutModel');

const WorkoutController = {
  async createWorkout (req, res) {
    const {title, load, reps} = req.body
    try {
      const workout = await WorkoutModel.create({title, load, reps})
      res.status(200).json(workout)
    } catch (error) {
      res.status(400).json({message:error.message})
    }
  },
  async updateWorkout (req, res) {
    try {
      const {id} = req.params
      if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(400).json({message:'Item not found '})
      }
      const workout = await WorkoutModel.findByIdAndUpdate(id,{...req.body})
      res.status(200).json(workout)
    } catch (error) {
      res.status(400).json({message:error.message})
    }
  },
  async getWorkouts (req, res) {
    try {
      const workout = await WorkoutModel.find({}).sort({createdAt: -1})
      res.status(200).json(workout)
    } catch (error) {
      res.status(400).json({message:error.message})
    }
  },
  async getWorkout (req, res) {
    try {
      const {id} = req.params
      if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(400).json({message:'Item not found '})
      }
      const workout = await WorkoutModel.findById(id)
      console.log('workout', workout)
      if(!workout) {
        return res.status(404).json({message:'Item not found'})
      } 
      res.status(200).json(workout)
    } catch (error) {
      res.status(400).json({message:error.message})
    }
  },
  async deleteWorkout (req, res) {
    try {
      const {id} = req.params
      if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(400).json({message:'Item not found '})
      }
      const workout = await WorkoutModel.findByIdAndDelete(id)
      res.status(200).json({message:'Item has been deleted', workout: workout})
    } catch (error) {
      res.status(400).json({message:error.message})
    }
  }
}

module.exports = WorkoutController;

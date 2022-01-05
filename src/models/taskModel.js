import mongoose from 'mongoose'

export const taskSchema = new mongoose.Schema({
  description: String,
  done: Boolean,
  createdAt: Date,
})

export const taskModel = mongoose.model('Task', taskSchema)

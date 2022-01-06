import { taskModel } from '../models/taskModel.js'
import {
  ReqException,
  NullException,
  NotFoundException,
} from '../utilities/exceptionBuilder.js'

export async function show(req, res) {
  try {
    const paramId = req.params.id

    if (paramId) {
      const task = await taskModel.findOne({ _id: paramId })
      return res.json(task)
    } else {
      const taskCollection = await taskModel.find()
      return res.json(taskCollection)
    }
  } catch (error) {
    if (error.name === 'CastError') return res.json(ReqException(error))

    return res.json(error)
  }
}

export async function insert(req, res) {
  const reqBody = { ...req.body }

  try {
    if (!reqBody.description) throw new NullException('description')

    if (!reqBody.done) reqBody.done = false

    reqBody.createdAt = new Date()

    const task = new taskModel({
      description: reqBody.description,
      done: reqBody.done,
      createdAt: reqBody.createdAt,
    })

    await task.save()

    return res.json(task)
  } catch (error) {
    if (error.name === 'CastError') return res.json(ReqException(error))

    return res.json(error)
  }
}

export async function update(req, res) {
  const paramId = req.params.id
  const reqBody = { ...req.body }

  try {
    const task = await taskModel.findOne({ _id: paramId })

    if (reqBody.description) task.description = reqBody.description

    if (reqBody.done) task.done = reqBody.done

    await task.save()

    return res.json(task)
  } catch (error) {
    if (error.name === 'CastError') return res.json(ReqException(error))

    return res.json(error)
  }
}

export async function remove(req, res) {
  const paramId = req.params.id

  try {
    const task = await taskModel.findOneAndRemove({ _id: paramId })

    if (!task) throw new NotFoundException('id')

    return res.json()
  } catch (error) {
    if (error.name === 'CastError') return res.json(ReqException(error))

    return res.json(error)
  }
}

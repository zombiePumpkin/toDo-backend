import { taskModel } from '../models/taskModel.js'

export async function show(req, res) {
  try {
    const taskCollection = await taskModel.find()
    return res.json({ ...taskCollection })
  } catch (error) {
    console.log(error)
  }
}

export async function insert(req, res) {
  const postInfo = { ...req.body }

  try {
    if (!postInfo.description) {
      return console.log('[Error] - There is no description')
    }

    if (!postInfo.createdAt) postInfo.createdAt = new Date()

    if (!postInfo.done) postInfo.done = false

    const task = new taskModel({
      description: postInfo.description,
      done: postInfo.done,
      createdAt: postInfo.createdAt,
    })

    console.log(postInfo)

    await task.save()

    return
  } catch (error) {
    console.log(error)
  }
}

export async function update(req, res) {}

export async function remove(req, res) {}

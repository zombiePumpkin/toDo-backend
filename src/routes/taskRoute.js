import * as taskController from '../controllers/taskController.js'

export function taskRoute(express) {
  const task = express.Router()

  task.get('/task', taskController.show)
  task.get('/task/:id', taskController.show)
  task.post('/task/insert', taskController.insert)
  task.put('/task/update/:id', taskController.update)
  task.delete('/task/remove/:id', taskController.remove)

  return task
}

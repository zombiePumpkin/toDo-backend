const taskController = require('../controllers/task')

module.exports = function taskRoute(express) {
  const task = express.Router()

  task.get('/task', taskController.show)
  task.post('task/insert', taskController.insert)
  task.put('task/update/:id', taskController.update)
  task.delete('task/remove/:id', taskController.remove)

  return task
}

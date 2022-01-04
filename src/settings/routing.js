import { taskRoute } from '../routes/taskRoute.js'

export function loadRouting(app, express) {
  app.use('/api', taskRoute(express))
}

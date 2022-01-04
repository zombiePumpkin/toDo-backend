const taskRoute = require('../routes/taskRoute')

function loadRouting(app, express) {
  app.use('/api', taskRoute(express))
}

module.exports = { loadRouting }

export function loadDatabase(mongoose) {
  mongoose.Promise = global.Promise

  return mongoose.connect('mongodb://localhost/todo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

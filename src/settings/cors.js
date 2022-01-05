export function allowCors(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Origin',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  )
  res.header(
    'Access-Control-Allow-Origin',
    'Origin, X-Request-With, Content-Type, Accept'
  )
  next()
}

function loadServer(app, port, url) {
  app.listen(port, () => {
    console.log(`Server listenning in port: ${port}`)
    console.log(`Please use the default url to use: ${url}`)
  })
}

module.exports = { loadServer }

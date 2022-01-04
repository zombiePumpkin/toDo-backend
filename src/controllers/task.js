function show(req, res) {
  console.log('this function show something')
}

function insert(req, res) {
  console.log('this function insert something')
}

function update(req, res) {
  console.log('this function update something')
}

function remove(req, res) {
  console.log('this function remove something')
}

module.exports = { show, insert, update, remove }

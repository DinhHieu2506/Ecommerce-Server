// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const cors = require('cors');
server.use(cors()); // Cho phép mọi domain, có thể custom nếu cần

server.use(middlewares)
server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is running')
})
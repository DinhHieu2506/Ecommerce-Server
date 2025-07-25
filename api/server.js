// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const cors = require('cors');
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
server.use(middlewares);
server.use(router);
  // Cho phép mọi domain, có thể custom nếu cần

server.use(middlewares)
server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is running')
})
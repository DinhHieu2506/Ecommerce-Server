// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const cors = require('cors');
server.use(cors({
  origin: ['https://ecommerce-dashboard-seven-phi.vercel.app'], // Cho phép mọi domain, có thể custom nếu cần
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Content-Range', 'X-Total-Count'],
  credentials: true,
})); // Cho phép mọi domain, có thể custom nếu cần

server.use(middlewares)
server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is running')
})
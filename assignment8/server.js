const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router('db.json');  // Path to db.json inside your app folder
const middlewares = jsonServer.defaults({
  static: path.join(__dirname, 'public')  // This will serve static files like images
});

// Add CORS headers for development
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});

// Log all requests for debugging
server.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
  console.log(`Static files are served from ${path.join(__dirname, 'public')}`);
});

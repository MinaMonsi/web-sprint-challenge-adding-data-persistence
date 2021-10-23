require('dotenv').config()
const server = require('./api/server');

const PORT = process.env.PORT || 5001;

server.listen(PORT, () => {
  console.log(`\nServer is running on port ${PORT} in {process.env.NODE_ENV} mode!\n`);
});

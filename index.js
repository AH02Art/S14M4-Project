require("dotenv").config();

const server = require('./api/server.js');

const PORT = process.env.PORT;

server.listen(PORT, function() {
  console.log(`\nServer listening on port ${PORT}...\n`);
});

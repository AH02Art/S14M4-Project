const express = require("express");
const recipesRouter = require("./recipes/recipes-router.js");
const server = express();

server.use(express.json());

server.use("/api/recipes", recipesRouter);

server.use("*", function(request, response) {
    response.json({ project: "S14M4-Project" });
});

module.exports = server;
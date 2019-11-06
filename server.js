const express = require("express");
const server = express();
const carsRouter = require("./cars/car.routes");

server.use(express.json());

server.use("/api/cars", carsRouter);

server.get("/", (req, res) => {
  res.send(`<h2>Hello world!</h2>`);
});

module.exports = server;

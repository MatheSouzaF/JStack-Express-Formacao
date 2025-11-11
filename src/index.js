const express = require("express");
require('express-async-errors');
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(routes);
// @ts-ignore
app.use((error, request, response, next) => {
  console.error("Error middleware");
  console.log(error);
  response.sendStatus(500);
});

app.listen(3000, () => {
  console.log("Server is running on port https://localhost:3000");
});

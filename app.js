const express = require("express");
const app = express();

const PORT_NUMBER = 3000;

app.get("/", (req, res) => {
  res.send("holy shit");
});

const routes = require("./server/routes/routes.js");

app.use(routes);
app.listen(PORT_NUMBER, (error) => {
  if (error) {
    console.log(`${error}`);
  } else {
    console.log(`Server running at port ${PORT_NUMBER}`);
  }
});

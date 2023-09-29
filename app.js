const express = require("express");
const app = express();

const PORT_NUMBER = 3000;

const routes = require("./server/routes/routes.js");

app.use("/views", express.static(__dirname + "/public/views"));
app.use("/dist", express.static(__dirname + "/dist"));
app.use("/src", express.static(__dirname + "/src"));

app.use(routes);

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname + "/public/" });
});

app.listen(PORT_NUMBER, (error) => {
  if (error) {
    console.log(`${error}`);
  } else {
    console.log(`Server running at port ${PORT_NUMBER}`);
  }
});

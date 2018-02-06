require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const massive = require("massive");
const port = process.env.PORT || 3005;
const app = express();
const mc = require("./controllers/mainCtrl");

app.use(cors());
app.use(json());
app.use("/", express.static(__dirname));

massive(process.env.CONNECTION_STRING)
  .then(db => app.set("db", db))
  .catch(console.log);

app.get("/api/users", mc.getUsers);
app.post("/api/users/create", mc.createUsers);
app.put("/api/users/update", mc.updateUsers);
app.delete("/api/users/delete", mc.deleteUsers);

app.get("/api/users/min", (req, res, next) => {
  const db = req.app.get("db");
  db.getMin().then(response => res.status(200).json(response[0]));
});

app.get("/api/users/max", (req, res, next) => {
  const db = req.app.get("db");
  db.getMax().then(response => res.status(200).json(response[0]));
});

app.listen(port, function() {
  console.log("Server listening on port: ", port);
});

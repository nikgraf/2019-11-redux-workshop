const express = require("express");
const data = require("./data");
const cors = require("cors");

const app = express();
app.use(cors());

const body_parser = require("body-parser");

const port = 4000;

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// parse JSON (application/json content-type)
app.use(body_parser.json());

app.get("/todos", (req, res) => {
  res.json(data);
});

app.post("/todos", (req, res) => {
  const todo = { ...req.body, id: uuidv4() };
  console.log("Adding new todo: ", todo);

  // add new todo to array
  data.push(todo);

  // return updated list
  res.json(todo);
});

app.listen(port, () => {
  console.log(`Server listening at ${port}`);
});

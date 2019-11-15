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

app.get("/places", (req, res) => {
  console.log("Get places");
  res.json(data.places);
});

app.post("/places", (req, res) => {
  const place = { ...req.body, id: uuidv4() };
  console.log("Adding new place: ", place);

  // add new place to array
  data.places.push(place);

  // return updated list
  res.json(place);
});

app.listen(port, () => {
  console.log(`Server listening at ${port}`);
});

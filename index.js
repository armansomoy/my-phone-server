const express = require("express");
const cors = require('cors');
const phones = require("./phones.json");
const app = express();
const port = 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("my phones info");
});
app.get("/phones", (req, res) => {
  res.send(phones);
});

app.get("/phones/:id", (req, res) => {
  const id = req.params.id;
  console.log(`I need data for id: ${id}`);

  const phone = phones.find((phone) => phone.id === parseInt(id));
  res.send(phone);
});

app.listen(port, () => {
  console.log(`my phone server is sunning on port : ${port}`);
});

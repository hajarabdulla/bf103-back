const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ type: "application/*+json" }));
app.use(bodyParser.urlencoded({ extended: false }));

let users = [
  {
    id: 1,
    name: "Hajar",
    surname: "Abdullayeva",
  },
  {
    id: 2,
    name: "Nigar",
    surname: "Abdullayeva",
  },
];

app.get("/users", (req, res) => {
  res.status(200).send(users);
  //   res.status(200).json({
  //     status: true,
  //     data: users,
  //     count: users.length,
  //   });
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;

  const user = users.find((u) => u.id == id);

  if (!user) {
    res.json({ status: false, message: "User Not Found" });
  }
  res.json(user);
});

app.post("/users", (req, res) => {
  const user = {
    id: uuidv4(),
    name: req.body.name,
    surname: req.body.surname,
  };

  //   users.push(req.body);
  // users = [
  //   ...users,
  //   { id: uuidv4(), name: req.body.name, surname: req.body.surname },
  // ];

  users.push(user);
  res.json(users);
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const updatedUsers = users.filter((u) => u.id != id);

  res.json(updatedUsers);
});

app.put("/users/:id", (req, res) => {
  // users = users.filter((u) => u.id != req.params.id);
  // const user = {
  //   id: req.params.id,
  //   name: req.body.name,
  //   surname: req.body.surname,
  // };
  // users.push(user);
  // res.json(users);

  const { id } = req.params;
  const newArr = users.map((elem) => {
    if (elem.id == id) {
      return { ...elem, name: req.body.name, surname: req.body.surname };
    } else {
      return elem;
    }
  });
  res.json(newArr);
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Port is running on ${PORT}`);
});

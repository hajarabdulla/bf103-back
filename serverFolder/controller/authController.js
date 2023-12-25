const User = require("../model/user");

//! Add New User
const AddUser = async (req, res) => {
  try {
    const { name, surname, age } = req.body;
    const user = new User({
      name,
      surname,
      age,
    });
    user.save();
    res.status(201).json({ message: "success", data: user });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//! Get All Users
const GetUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//! Get User By Id
const GetUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//! Delete User
const DeleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//! Update User
const UpdateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, surname, age } = req.body;

    const user = await User.findByIdAndUpdate(
      id,
      {
        name,
        surname,
        age,
      },
      { new: true }
    );

    if (!user) {
      res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  AddUser,
  GetUsers,
  GetUserById,
  DeleteUser,
  UpdateUser,
};

const router = require("express").Router();
const User = require("../models/User");

// Create a new user
router.post("/add", async (req, res) => {
  try {
    const { name, email, delivery_address, phone_number, password } = req.body;
    const newUser = new User({
      name,
      email,
      delivery_address,
      phone_number,
      password,
    });
    await newUser.save();
    res.status(201).json("User Added");
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error creating user" });
  }
});

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error retrieving users" });
  }
});

// Update a user by ID
router.put("/update/:id", async (req, res) => {
  const userId = req.params.id;
  const { name, email, delivery_address, phone_number, password } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(userId, {
      name,
      email,
      delivery_address,
      phone_number,
      password,
    }, { new: true });
    if (updatedUser) {
      res.json({ status: "User updated", user: updatedUser });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error updating user" });
  }
});

// Delete a user by ID
router.delete("/delete/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    if (deletedUser) {
      res.json({ status: "User Deleted" });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error deleting user" });
  }
});

// Get a user by ID
router.get("/get/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId);
    if (user) {
      res.json({ status: "User Found", user });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error retrieving user" });
  }
});

module.exports = router;

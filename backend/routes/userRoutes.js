const express = require("express");
const User = require("../models/User");
const multer = require("multer");
const router = express.Router();

const upload = multer({ dest: "uploads/" });

// Create user
router.post("/users", upload.single("profileImage"), async (req, res) => {
  try {
    const { name, phone, email } = req.body;
    const profileImage = req.file ? req.file.path : req.body.profileImage; // Handle both cases
    const user = await User.create({ name, phone, email, profileImage });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update user
router.put("/users/:id", async (req, res) => {
  try {
    const { name, phone, email, profileImage } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { name, phone, email, profileImage },
      { new: true }
    );
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete user
router.delete("/users/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

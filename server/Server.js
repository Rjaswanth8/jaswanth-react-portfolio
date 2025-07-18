// server/Server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Atlas connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Mongoose schema and model
const ContactSchema = new mongoose.Schema({
  name: String,
  user_email: String,
  subject: String,
  message: String,
});

const Contact = mongoose.model("Contact", ContactSchema);

// Contact form endpoint
app.post("/contact", async (req, res) => {
  try {
    console.log("Received contact form data:", req.body);
    const { name, user_email, subject, message } = req.body;
    const newContact = new Contact({ name, user_email, subject, message });
    await newContact.save();
    res.status(201).json({ success: true, message: "Message sent!" });
  } catch (err) {
    console.error("❌ Error saving contact:", err);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: err.message });
  }
});

// Serve React build static files
app.use(express.static(path.join(__dirname, "../build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

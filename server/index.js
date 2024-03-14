const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const songRoutes = require("./routes/songRoutes");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGOURI =
  "mongodb+srv://ktk2real:krosection999@cluster0.abfalpl.mongodb.net/internshiptest?retryWrites=true&w=majority";

// Middleware
app.use(bodyParser.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Connect to MongoDB
mongoose.connect(MONGOURI, {});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use("/api/songs", songRoutes);

// Start server

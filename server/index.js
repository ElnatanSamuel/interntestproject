const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const songRoutes = require("./routes/songRoutes");

const app = express();

const PORT = 3000;
const MONGOURI =
  "mongodb+srv://ktk2real:krosection999@cluster0.abfalpl.mongodb.net/internshiptest?retryWrites=true&w=majority";

// Middleware
app.use(cors());
// Connect to MongoDB
mongoose.connect(MONGOURI, {});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use("/api/songs", songRoutes);

app.get("/", (req, res) => res.send("Express on Vercel"));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;

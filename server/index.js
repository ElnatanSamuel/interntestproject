const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const songRoutes = require("./routes/songRoutes");
const Song = require("./models/SongModel");

const app = express();

const PORT = 5010;
const MONGOURI =
  "mongodb+srv://ktk2real:krosection999@cluster0.abfalpl.mongodb.net/internshiptest?retryWrites=true&w=majority";

// Middleware
app.use(express.json());

app.use(cors());
// Connect to MongoDB
mongoose.connect(MONGOURI, {});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected to MongoDB");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("what up");
});

app.get("/api/allsongs", async (req, res) => {
  const songs = await Song.find({});
  // res.send(songs);
  res.json(songs);
});

app.post("/api/createsong", async (req, res) => {
  const song = new Song({
    title: req.body.title,
    artist: req.body.artist,
    genre: req.body.genre,
    duration: req.body.duration,
    id: req.body.id,
  });
  try {
    const newSong = await song.save();
    console.log(newSong);
    res.json(newSong);
  } catch (error) {
    // Handle errors appropriately
    res.status(500).json({ error: "An error occurred while adding the song." });
  }
});

// export default app;

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Song = require("./models/SongModel");

app.use(express.json());
app.use(cors());

const MONGOURI =
  "mongodb+srv://ktk2real:krosection999@cluster0.abfalpl.mongodb.net/internshiptest?retryWrites=true&w=majority";

const runMongo = async () => {
  await mongoose.connect(MONGOURI, console.log("connected to mongoose"));
};

runMongo();

const PORT = 5000;

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running,  and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});

app.post("/api/addsong", async (req, res) => {
  const songs = await new Song({
    name: req.body.name,
    artist: req.body.artist,
    desc: req.body.desc,
    duration: req.body.duration,
    id: req.body.id,
  });

  songs.save();
});

app.get("/api/allsongs", async (req, res) => {
  const songs = await Song.find({});

  res.json(songs);
});

app.post("/api/editsong", async (req, res) => {
  console.log(req.body.activeId);
  const newValues = {
    $set: {
      name: req.body.newName,
      artist: req.body.newArtist,
      desc: req.body.newDesc,
      duration: req.body.newDuration,
    },
  };
  await Song.updateOne({ id: req.body.activeId }, newValues);
});

app.post("/api/deletesong", async (req, res) => {
  await Song.deleteOne({ id: req.body.id });
});

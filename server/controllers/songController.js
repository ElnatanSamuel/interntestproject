const Song = require("../models/SongModel");

// Controller functions
exports.getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getSongById = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    res.json(song);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createSong = async (req, res) => {
  const song = new Song({
    title: req.body.title,
    artist: req.body.artist,
    genre: req.body.genre,
    duration: req.body.duration,
    id: req.body.id,
  });

  try {
    const newSong = await song.save();
    res.json(newSong);
  } catch (error) {
    // Handle errors appropriately
    res.status(500).json({ error: "An error occurred while adding the song." });
  }
};

exports.updateSong = async (req, res) => {
  const newValues = {
    $set: {
      title: req.body.newTitle,
      artist: req.body.newArtist,
      genre: req.body.newGenre,
      duration: req.body.newDuration,
      id: req.body.activeId,
    },
  };
  await Song.updateOne({ id: req.body.activeId }, newValues);
};

exports.deleteSong = async (req, res) => {
  await Song.deleteOne({ id: req.body.id });
};

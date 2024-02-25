const mongoose = require("mongoose");

const songSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  duration: {
    type: String,
  },
  id: {
    type: String,
  },
});

const Song = mongoose.model("SongData", songSchema);

module.exports = Song;

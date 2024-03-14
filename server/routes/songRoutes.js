const express = require("express");
const router = express.Router();
const songController = require("../controllers/songController");

// CRUD Routes
router.get("/", songController.getAllSongs);
router.post("/", songController.createSong);
router.post("/editsong/", songController.updateSong);
router.post("/deletesong/", songController.deleteSong);

module.exports = router;

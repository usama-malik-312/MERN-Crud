const express = require("express");
const {
  getNotes,
  createNote,
  getNoteById,
  deleteNote,
  updateNote,
} = require("../Controllers/noteController");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");

router.route("/").get(protect, getNotes);
router.route("/create").post(protect, createNote);
router
  .route("/:id")
  .get(protect, getNoteById)
  .put(protect, updateNote)
  .delete(protect, deleteNote);

module.exports = router;

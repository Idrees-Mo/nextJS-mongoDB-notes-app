const { mongoose } = require("mongoose");

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [ture, "Note title is required"],
  },
  detail: {
    type: String,
    required: [true, "Note detail is required"],
  },
});

export default Note = mongoose.model("note", NoteSchema);

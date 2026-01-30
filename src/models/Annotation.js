const mongoose = require("mongoose");

const annotationSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    default: "",
  },
  x: Number,
  y: Number,
  width: Number,
  height: Number,
});

module.exports = mongoose.model("Annotation", annotationSchema);

const Annotation = require("../models/Annotation");

exports.create = async (req, res) => {
  const annotation = await Annotation.create({
    ...req.body,
    userId: req.userId,
  });
  res.json(annotation);
};

exports.getAll = async (req, res) => {
  const data = await Annotation.find({ userId: req.userId });
  res.json(data);
};

exports.update = async (req, res) => {
  const updated = await Annotation.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};

exports.remove = async (req, res) => {
  await Annotation.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};

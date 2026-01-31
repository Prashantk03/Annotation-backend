const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const annotationRoutes = require("./routes/annotation.routes");

const app = express();

app.use(
  cors({
    origin: "https://annotation-frontend-gilt.vercel.app",
    credentials: true,
  })
);

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/annotations", annotationRoutes);

module.exports = app;


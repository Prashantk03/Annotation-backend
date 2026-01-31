const express = require("express");
const cors = require("cors");

const app = express();

const authRoutes = require("./routes/auth.routes");
const annotationRoutes = require("./routes/annotation.routes");

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://annotation-frontend-gilt.vercel.app", 
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// IMPORTANT: handle preflight explicitly
app.options("*", cors());

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/annotations", annotationRoutes);

module.exports = app;

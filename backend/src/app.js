const express = require("express");
const sweetRoutes = require("./routes/sweet.routes");

const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});
app.use("/api/sweets", sweetRoutes);
app.use("/api/auth", authRoutes);

module.exports = app;

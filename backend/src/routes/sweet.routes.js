// src/routes/sweet.routes.js
const router = require("express").Router();
const auth = require("../middlewares/auth.middleware");
const Sweet = require("../models/Sweet");

router.post("/", auth, async (req, res) => {
  const sweet = await Sweet.create(req.body);
  res.status(201).json(sweet);
});

router.get("/", auth, async (req, res) => {
  res.json(await Sweet.find());
});

router.post("/:id/purchase", auth, async (req, res) => {
  const sweet = await Sweet.findById(req.params.id);
  if (!sweet || sweet.quantity <= 0)
    return res.status(400).json({ message: "Out of stock" });

  sweet.quantity--;
  await sweet.save();
  res.json(sweet);
});

module.exports = router;

const express = require("express");
const router = express.Router();
const db = require("../config/firebase");


// ADD ITEM
router.post("/add", async (req, res) => {
  try {
    const item = {
      ...req.body,
      status: "Open",
      createdAt: new Date()
    };

    const docRef = await db
      .collection("items")
      .add(item);

    res.json({
      message: "Item added",
      id: docRef.id
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error adding item"
    });
  }
});


// GET ALL ITEMS
router.get("/all", async (req, res) => {
  try {
    const snapshot = await db
      .collection("items")
      .get();

    const items = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.json(items);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error fetching items"
    });
  }
});

module.exports = router;

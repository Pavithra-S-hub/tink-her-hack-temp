const express = require("express");
const router = express.Router();
const db = require("../config/firebase");


// ➜ ADD ITEM
router.post("/add", async (req, res) => {
  try {
    console.log("BODY RECEIVED:", req.body);

    if (!req.body.title) {
      return res.status(400).json({
        message: "Title missing",
      });
    }

    const newItem = {
      title: req.body.title,
      category: req.body.category,
      campus: req.body.campus,
      description: req.body.description,
      type: req.body.type,
      status: "Open",
      createdAt: new Date(),
    };

    const docRef = await db
      .collection("items")
      .add(newItem);

    res.json({
      message: "Item added",
      id: docRef.id,
    });

  } catch (error) {
    console.error("FIREBASE ERROR:", error);

    res.status(500).json({
      message: "Firestore failed",
      error: error.message,
    });
  }
});


// ➜ GET ALL ITEMS
router.get("/all", async (req, res) => {
  try {
    const snapshot = await db.collection("items").get();

    const items = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.json(items);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Fetch failed",
    });
  }
});

module.exports = router;

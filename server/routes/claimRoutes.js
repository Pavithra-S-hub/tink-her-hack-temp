const express = require("express");
const router = express.Router();
const db = require("../config/firebase");


// ADD CLAIM
router.post("/add", async (req, res) => {
  try {
    const claimData = {
      ...req.body,
      status: "Pending",
      createdAt: new Date()
    };

    const docRef = await db
      .collection("claims")
      .add(claimData);

    res.json({
      message: "Claim stored",
      id: docRef.id
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error storing claim"
    });
  }
});


// GET ALL CLAIMS
router.get("/all", async (req, res) => {
  try {
    const snapshot = await db
      .collection("claims")
      .get();

    const claims = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.json(claims);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error fetching claims"
    });
  }
});

module.exports = router;

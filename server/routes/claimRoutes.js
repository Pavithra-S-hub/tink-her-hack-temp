const express = require("express");
const router = express.Router();
const db = require("../config/firebase");


// 🔹 TEST ROUTE
router.get("/test", (req, res) => {
  res.send("Claim route working ✅");
});


// 🔹 ADD CLAIM
router.post("/add", async (req, res) => {
  try {
    console.log("Incoming claim:", req.body);

    const claimData = {
      ...req.body,
      createdAt: new Date(),
    };

    const docRef = await db
      .collection("claims")
      .add(claimData);

    res.json({
      message: "Claim stored successfully",
      id: docRef.id,
    });

  } catch (error) {
    console.error("Error storing claim:", error);
    res.status(500).json({
      message: "Failed to store claim",
    });
  }
});


// 🔹 GET ALL CLAIMS
router.get("/all", async (req, res) => {
  try {
    const snapshot = await db
      .collection("claims")
      .get();

    const claims = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.json(claims);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to fetch claims",
    });
  }
});


module.exports = router;

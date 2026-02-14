const express = require("express");
const cors = require("cors");
const path = require("path");

const itemRoutes = require("./routes/itemRoutes");
const claimRoutes = require("./routes/claimRoutes");

const app = express();

app.use(cors());
app.use(express.json());


// ROUTES
app.use("/api/items", itemRoutes);
app.use("/api/claims", claimRoutes);

// Serve React build in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}


app.listen(5000, () => {
  console.log("Server running on port 5000");
});

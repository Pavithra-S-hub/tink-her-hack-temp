const express = require("express");
const cors = require("cors");

const itemRoutes = require("./routes/itemRoutes");
const claimRoutes = require("./routes/claimRoutes");

const app = express();

app.use(cors());
app.use(express.json());


// ROUTES
app.use("/api/items", itemRoutes);
app.use("/api/claims", claimRoutes);


app.listen(5000, () => {
  console.log("Server running on port 5000");
});

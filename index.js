const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Use the user routes
app.use("/api/v1", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

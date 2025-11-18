import express from "express";

const app = express();
const PORT = process.env.PORT || 10000;

// Basic health check route
app.get("/", (req, res) => {
  res.send("Linkedin-Master is running successfully 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

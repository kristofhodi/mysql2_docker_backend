import express from "express";
import db from "./db.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend fut 🚀");
});

app.get("/users", async (req, res) => {
  const [rows] = await db.query("SELECT * FROM users");
  res.json(rows);
});

app.listen(3000, () => {
  console.log("Server fut: http://localhost:3000");
});

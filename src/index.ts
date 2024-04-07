import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json(req.url);
});

app.listen(port, () => {
  console.log(`server start at http://localhost:${port}`);
});

const express = require("express");
const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("dist/"));

app.get("/physicians", (req, res) => {
  res.status(200).json({ message: "get physicians ok" });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

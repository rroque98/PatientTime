const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const ctrl = require("../controllers");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("dist/"));

app.get("/physicians", (req, res) => {
  ctrl.getPhysicians((err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).json(data);
    }
  });
});

app.get("/appointments/:physicianId", (req, res) => {
  ctrl.getAppointments(req.params.physicianId, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).json(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

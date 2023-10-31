const express = require("express");
const multer = require("multer")({
  dest: process.cwd() + "/uploads",
  limits: {
    fileSize: 20 * 1024 * 1024, // 20MB
  },
});
const apiRouter = express.Router();

apiRouter.post("/fileanalyse", multer.single("upfile"), (req, res) => {
  if (!req.file) {
    return res.sendStatus(400);
  }
  const type = req.file.mimetype;
  const name = req.file.originalname;
  const size = req.file.size;

  return res.status(200).send({ name, type, size });
});

module.exports = apiRouter;

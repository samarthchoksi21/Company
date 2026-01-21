const express = require("express");
const {COMPANY} = require('../models/model')
const {upload} = require('../multer')
const Validations = require('../validation')
const StateNames = require('../states')

const router = express.Router();

router.post(
  "/company",
  upload.fields([
    { name: "logo", maxCount: 1 },
    { name: "banner", maxCount: 1 }
  ]),
  Validations,
  async (req, res) => {
    try {
      const company = new COMPANY({
        ...req.body,
        logo: req.files.logo[0].path,
        banner: req.files.banner[0].path
      });

      await company.save();
      res.status(201).json({ message: "Company saved", company });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

router.get('/states',(req,res) =>{
  return res.status(200).json({
    Status : "Here are your States",
    StateNames
  })
})

module.exports = router;

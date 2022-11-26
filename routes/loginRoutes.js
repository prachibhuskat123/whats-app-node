const express = require("express");
const router = express.Router();
const login = require("../controllers/Login");
const helper = require("../middleware/helper");
const { checkSchema,body } = require("express-validator");

//Login controller routes
router.post(
    "/validateMobile",
    // body("mobile_no")
    //   .exists()
    //   .notEmpty()
    //   .withMessage("Mobile Number is required"),
    // helper.getError,
    login.validateMobile
  );

  module.exports = router;
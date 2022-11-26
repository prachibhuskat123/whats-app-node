const express = require("express");
const router = express.Router();
// const applicant = require("../controllers/Applicant");
// const login = require("../controllers/Login");
const helper = require("../middleware/helper");
const { checkSchema,body } = require("express-validator");

//Applicant Controller routes
// router.post(
//   "/getApplicationList",
//   body("user_id")
//     .exists()
//     .notEmpty()
//     .withMessage("User id is required"),
//   helper.getError,
//   applicant.getApplicationList
// );

// router.post(
//   "/getInstituteList",
//   body("institute_name")
//     .exists()
//     .notEmpty()
//     .withMessage("Institute name is required")
//     .isAlpha()
//     .withMessage("Institute name should be only characters")
//     .isLength({ min: 3 })
//     .withMessage("Institute name should greater than 3 characters"),
//   helper.getError,
//   applicant.getInstituteList
// );

// router.post(
//   "/getState",
//   body("country_id")
//     .exists()
//     .notEmpty()
//     .withMessage("Country id is required"),
//   helper.getError,
//   applicant.getState
// );


// router.post(
//   "/getCity",
//   body("country_id")
//     .exists()
//     .notEmpty()
//     .withMessage("Country id is required"),
//   helper.getError,
//   applicant.getCity
// );

// router.post(
//   "/getApplicantDetails",
//   body("application_id")
//     .exists()
//     .notEmpty()
//     .withMessage("Application id is required"),
//   helper.getError,
//   applicant.getApplicantDetails
// );


module.exports = router;

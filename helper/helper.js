const { body, validationResult } = require("express-validator");

exports.getError = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ status: "0", message: errors.array()[0].msg });
    return;
  }
  next();
};
const express = require('express');
const route = express.Router();
const conn = require('../config/dbconn.js');
const {createStudent} = require('../controllers/indexController.js');
const { check } = require("express-validator");

route.post('/postStudent',[
    check('first_name','First name cannot be left blank').not().isEmpty(),
    check('last_name','Last name cannot be left blank').not().isEmpty(),
    check('mobile','Mobile no should have 10 digits').isLength({min:10,max:10}),
    check('email','Please enter valid email address').isEmail().normalizeEmail(),
],createStudent);

module.exports = route;
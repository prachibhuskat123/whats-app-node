const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const dotenv = require('dotenv');
const route = require('./routes/myroutes');

dotenv.config();
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// simple route
// app.use(insRoutes);
// app.use(loginRoutes);
app.use(route);
app.get("/", (req, res) => {  res.json({ message: "Welcome to application." });});


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => 
{  
    console.log(`Server is running on port ${PORT}.`);
});

    
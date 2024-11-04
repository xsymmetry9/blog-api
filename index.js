require("dotenv").config();

// CREATES EXPRESS APP
const express = require("express");
const app = express();
var cors = require("cors");

//IMPORT ROUTES
const routes = require("./routes/routes.js");

//CONFIGURE CORS
const corsOption = {
    origin: "http://localhost:3000",
};

app.use(cors(corsOption));

//CREATES PATH FOR OTHER FILES LIKE EJS
const path = require("path");
const assetsPath = path.join(__dirname, "views");
app.set("view engine", "ejs");
app.use(express.static(assetsPath));
app.use(express.urlencoded({extended: false}));

app.use("/", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
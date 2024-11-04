const {Router} = require('express');
const router = Router();

const userController = require("../controller/user.controller");

router.get("/", (req, res) => {
    res.render("index", {title: "here we go"});
});

router.get("/api", userController.readAll);

router.post("/api/addUser", userController.create);

module.exports = router;
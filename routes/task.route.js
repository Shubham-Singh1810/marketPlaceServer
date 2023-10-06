const express = require("express");
const router= express.Router();
const taskController = require("../controller/task.controller");
const auth = require("../middlewere/auth")


router.route("/create").post(auth, taskController.create);
router.route("/getByUser/:id").get(auth, taskController.getTaskByUser);


module.exports = router
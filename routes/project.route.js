const express = require("express");
const router= express.Router();
const projectController = require("../controller/project.controller");
const auth = require("../middlewere/auth")


router.route("/create").post(auth, projectController.create);
router.route("/list_all").get(auth, projectController.getProjectList);
router.route("/:id").get(auth, projectController.getProjectById);
router.route("/update").put(auth, projectController.update);
router.route("/delete/:id").delete(auth, projectController.delete);
router.route("/like").post(auth, projectController.like);
router.route("/collab").post(auth, projectController.collab);
// router.route("/getByUser/:id").get(auth, taskController.getTaskByUser);


module.exports = router
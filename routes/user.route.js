const express = require("express");
const router= express.Router();
const userController = require("../controller/user.controller")
const auth = require("../middlewere/auth")
router.route("/sign_up").post(userController.signUp);
router.route("/email_verify").post(userController.emailVerify);
router.route("/login").post(userController.login);
router.route("/update_profile").put(auth, userController.update);
router.route("/list_all").get(auth, userController.getUsers);
router.route("/:id").get(auth, userController.getById);
// router.route("/delete/:id").delete(auth, userController.deleteUser);

module.exports = router
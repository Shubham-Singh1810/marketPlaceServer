const userServ = require("../service/user.service");
const util = require("../utils/util");
require("dotenv").config();
module.exports = {
    signUp: async function (req, res) {
    let result = await userServ.signUp(req.body);
    util.sendResponse(result, req, res);
  },
  emailVerify: async function (req, res) {
    let result = await userServ.emailVerify(req.body);
    util.sendResponse(result, req, res);
  },
  login: async function (req, res) {
    let result = await userServ.login(req.body);
    util.sendResponse(result, req, res);
  },
  update: async function (req, res) {
    let result = await userServ.updateUser(req.body);
    util.sendResponse(result, req, res);
  },
  getUsers: async function (req, res) {
    let result = await userServ.getUsers(req.body);
    util.sendResponse(result, req, res);
  },
  getById: async function (req, res) {
    let result = await userServ.getUserById(req.params.id);
    util.sendResponse(result, req, res);
  },
  deleteUser: async function (req, res) {
    let result = await userServ.deleteUser(req.params.id);
    util.sendResponse(result, req, res);
  },
};

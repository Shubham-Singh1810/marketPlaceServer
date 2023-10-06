const taskServ = require("../service/task.service");
const util = require("../utils/util");
require("dotenv").config();
module.exports = {
  create: async function (req, res) {
    let result = await taskServ.create(req.body);
    util.sendResponse(result, req, res);
  },
  getTaskByUser: async function (req, res) {
    let result = await taskServ.getTaskByUser(req.params.id);
    util.sendResponse(result, req, res);
  },
};

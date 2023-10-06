const projectServ = require("../service/project.service");
const util = require("../utils/util");
require("dotenv").config();
module.exports = {
  create: async function (req, res) {
    let result = await projectServ.create(req.body);
    util.sendResponse(result, req, res);
  },
  getProjectList: async function (req, res) {
    let result = await projectServ.getProjectList(req.body);
    util.sendResponse(result, req, res);
  },
  getProjectById: async function (req, res) {
    let result = await projectServ.getProjectById(req.params.id);
    util.sendResponse(result, req, res);
  },
  update: async function (req, res) {
    let result = await projectServ.update(req.body);
    util.sendResponse(result, req, res);
  },
  delete: async function (req, res) {
    let result = await projectServ.delete(req.params.id);
    util.sendResponse(result, req, res);
  },
  like: async function (req, res) {
    let result = await projectServ.like(req.body);
    util.sendResponse(result, req, res);
  },
  collab: async function (req, res) {
    let result = await projectServ.collab(req.body);
    util.sendResponse(result, req, res);
  },
};

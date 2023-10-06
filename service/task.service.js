const Task = require("../model/task.model");
require("dotenv").config();
module.exports = {
  create: async function (body) {
    let result = {};
    try {
      result.data = await new Task(body).save();
      result.message = "Task created Successfully";
    } catch (error) {
      result.error = error;
    }
    return result;
  },
  getTaskByUser: async function (employeeId) {
    let result = {};
    try {
      result.data = await Task.find({employeeId: employeeId});
      result.message = "Task created Successfully";
    } catch (error) {
      result.error = error;
    }
    return result;
  },
};

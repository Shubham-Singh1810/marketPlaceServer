const Project = require("../model/project.model");
require("dotenv").config();
module.exports = {
  create: async function (body) {
    let result = {};
    try {
      result.data = await new Project(body).save();
      result.message = "Project created Successfully";
    } catch (error) {
      result.error = error;
    }
    return result;
  },
  getProjectList: async function () {
    let result = {};
    try {
      result.data = await Project.find({});
      result.message = "Project list fetched Successfully";
    } catch (error) {
      result.error = error;
    }
    return result;
  },
  getProjectById: async function (id) {
    let result = {};
    try {
      result.data = await Project.findOne({_id: id});
      result.message = "Project  fetched Successfully";
    } catch (error) {
      result.error = error;
    }
    return result;
  },
  update: async function (body) {
    let result = {};
    try {
      result.data = await Project.findByIdAndUpdate(body._id, { $set: body }, { new: true });
      result.message = "Project list fetched Successfully";
    } catch (error) {
      result.error = error;
    }
    return result;
  },
  delete: async function (id) {
    let result = {};
    try {
      result.data = await Project.findByIdAndDelete(id);
      result.message = "Project deleted Successfully";
    } catch (error) {
      result.error = error;
    }
    return result;
  },
  like: async function (body) {
    let result ={};
    let query;
    const project = await Project.findOne({ _id: body.projectId });
    if (!project) {
      result.message="Project not found"
    }
    else{
      if (project.likes.includes(body.userId)) {
        query = { $pull: { likes: body.userId } };
        result.message = "Removed from Like list";
      } else {
        query = { $push: { likes: body.userId } };
        result.message = "Liked";
      }
    }
    result.data= await Project.findByIdAndUpdate({_id: body.projectId}, query);
    return result;
  },
  collab: async function (body) {
    let result ={};
    let query;
    const project = await Project.findOne({ _id: body.projectId });
    if (!project) {
      result.message="Project not found"
    }
    else{
      if (project.collaborators.includes(body.userId)) {
        query = { $pull: { collaborators: body.userId } };
        result.message = "User Removed from the collaborators List";
      } else {
        query = { $push: { collaborators: body.userId } };
        result.message = "User added from the collaborators List";
      }
    }
    result.data= await Project.findByIdAndUpdate({_id: body.projectId}, query);
    return result;
  },
};

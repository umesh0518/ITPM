const express = require("express");
const router = express.Router();
const controller = require("../../Controllers/Teacher/controller.teacherAssingment");

module.exports = function () {
  router.post("/create-assignment", controller.createteacherTask);
  router.get("/assignment", controller.getAllteacherTask);
  router.get("/assignment/:id", controller.viewteacherTaskById);
  router.put("/assignment/:id", controller.updateById);
  router.delete("/assignment/:id", controller.deleteById);
  router.put("/assignment/status/:id", controller.updateStatus);
  return router;
};

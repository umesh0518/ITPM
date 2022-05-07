const express = require("express");
const router = express.Router();
const controller = require("../../Controllers/Notice/controller.newNotice");

module.exports = function () {
  router.post("/add-notice", controller.createteacherTask);
  router.get("/notice", controller.getAllteacherTask);
  router.get("/notice/:id", controller.viewteacherTaskById);
  router.put("/notice/:id", controller.updateById);
  router.delete("/notice/:id", controller.deleteById);
  router.put("/notice/status/:id", controller.updateStatus);
  return router;
};

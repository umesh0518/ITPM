const express = require("express");
const router = express.Router();
const controller = require("../../Controllers/Course/controller.course.js");

module.exports = function () {
  //POST Student Payment
  router.post("/create", controller.createCourse);
  //GET Student Payment
  router.get("/", controller.getAllCourse);

  //GET Student Payment By ID
  router.get("/:id", controller.CourseById);
  //DELETE Student Payment By ID
  router.delete("/delete/:id", controller.deleteById);
  //UPDATE payment status
  router.put("/update/:id", controller.updateById);
  return router;
};

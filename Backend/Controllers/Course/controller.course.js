const Course = require("../../Modules/Course/module.course");

const createCourse = async (req, res) => {
  if (req.body) {
    const course = new Course(req.body);
    await course
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

const getAllCourse = async (req, res) => {
  await Course.find({})
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
};

const CourseById = async (req, res) => {
  if (req.params && req.params.id) {
    await Course.findById(req.params.id)
      .populate("courses", "_id name duration teacher description ")
      .then((response) => {
        res.status(200).send({ data: response });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

const deleteById = async (req, res) => {
  const id = req.params.id;
  await Course.findByIdAndRemove(id).exec();
  res.send("Course Declined");
};

const updateById = async (req, res) => {
  const id = req.params.id;
  const { status } = req.body;
  const updateCourse = {
    status,
  };
  await Course.findByIdAndUpdate(id, updateCourse)
    .then(() => {
      res.status(200).send({ status: "Course Updated" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: " Error", error: err.message });
    });
};

module.exports = {
  createCourse,
  getAllCourse,
  CourseById,
  updateById,
  deleteById,
};

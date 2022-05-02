const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const Course = require("../../Modules/Accountant/module.course");

/**
 * Get a specific Student payment controller
 * @param req
 * @param res
 * @param next
 * @param id
 * @returns {Promise<any>}
 */
const CourseById = (req, res, next, id) => {
  Course.findById(id).exec((err, Course) => {
    if (err || !Course) {
      return res.status(400).json({
        error: "Course not found",
      });
    }
    req.Course = Course;
    next();
  });
};

// get the payment details except photo
const read = (req, res) => {
  req.Course.paymentSlip = undefined;
  return res.json(req.Course);
};

/**
 * Create Student Payment controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const createCourse = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not be uploaded",
      });
    }
    let Course = new Course(fields);

    const {
      name,
      contactNo,
      studentID,
      depositedAmount,
      depositedDate,
      bank,
      branch,
      type,
      classes,
      teacher,
    } = fields;

    // validate fields
    if (
      !name ||
      !contactNo ||
      !studentID ||
      !depositedAmount ||
      !depositedDate ||
      !bank ||
      !branch ||
      !type ||
      !classes ||
      !teacher
    ) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    // validate photo size
    if (files.paymentSlip) {
      if (files.paymentSlip.size > 10000000) {
        return res.status(400).json({
          error: "Image should be less than 10mb in size",
        });
      }
      Course.paymentSlip.data = fs.readFileSync(files.paymentSlip.path);
      Course.paymentSlip.contentType = files.paymentSlip.type;
    }

    Course.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: "Error Found",
        });
      }
      res.json(result);
    });
  });
};

/**
 * Get all Student Payments controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const getAllCourse = (req, res) => {
  let order = req.query.order ? req.query.order : "asc";
  let sortBy = req.query.sortBy ? req.query.sortBy : "_id";

  Course.find()
    .select("-paymentSlip")
    .sort([[sortBy, order]])
    .exec((err, Courses) => {
      if (err) {
        return res.status(400).json({
          error: "No Student Payment Found",
        });
      }
      res.json(Courses);
    });
};

// get the photo of conference
const photo = (req, res, next) => {
  if (req.Course.paymentSlip.data) {
    res.set("Content-Type", req.Course.paymentSlip.contentType);
    return res.send(req.Course.paymentSlip.data);
  }
  next();
};

/**
 * Update only the status of student payment controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const updateStatus = async (req, res) => {
  const id = req.params.id;
  const { status } = req.body;
  const updateCourse = {
    status,
  };
  const update = await Course.findByIdAndUpdate(id, updateCourse)
    .then(() => {
      res.status(200).send({ status: "Status Updated" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: " Error", error: err.message });
    });
};

/**
 * Update the student payment controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const updateById = async (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not be uploaded",
      });
    }

    const {
      name,
      contactNo,
      studentID,
      depositedAmount,
      depositedDate,
      bank,
      branch,
      type,
      classes,
      teacher,
    } = fields;

    let Course = req.Course;
    Course = _.extend(Course, fields);

    if (files.paymentSlip) {
      if (files.paymentSlip.size > 10000000) {
        return res.status(400).json({
          error: "Image should be less than 10mb in size",
        });
      }
      Course.paymentSlip.data = fs.readFileSync(files.paymentSlip.path);
      Course.paymentSlip.contentType = files.paymentSlip.type;
    }

    Course.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: "Update Failed",
        });
      }
      res.json(result);
    });
  });
};

/**
 * Delete student Payment controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const deleteById = (req, res) => {
  let Course = req.Course;
  Course.remove((err, deletedPayment) => {
    if (err) {
      return res.status(400).json({
        error: "Error On Delete",
      });
    }
    res.json({
      deletedPayment,
      message: "Payment Deleted successfully",
    });
  });
};

/**
 * Calculate total Fee controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const calculateAmount = async (req, res) => {};

/**
 * export controllers
 * @type {{createCourse: createCourse,
 * getAllCourse: getAllCourse,
 * viewCourseById: viewCourseById,
 * updateById: updateById,
 * deleteById: deleteById,
 * calculateAmount: calculateAmount}}
 */
module.exports = {
  CourseById,
  read,
  createCourse,
  getAllCourse,
  photo,
  updateStatus,
  updateById,
  deleteById,
  calculateAmount,
};

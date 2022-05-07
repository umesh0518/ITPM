const validationReport = (value) => {
  let errors = {};
  //name
  if (!value.name) {
    errors.name = "Name cannot be empty";
  }
  //contact number validation
  if (
    typeof value.contactNo == "undefined" ||
    !value.contactNo ||
    value.contactNo.length != 10
  ) {
    errors.contactNo = "Contact number cannot be empty and should be 10 digit";
  }
  
  //studnet id valdation
  if (typeof value.studentID == "undefined" || !value.studentID) {
    errors.studentID = "Student ID is empty ";
  }

  // amount validation
  if (typeof value.depositedAmount == "undefined" || !value.depositedAmount) {
    errors.depositedAmount = "depositedAmount cannot be empty.";
  }
  // date validation
  if (typeof value.depositedDate == "undefined" || !value.depositedDate) {
    errors.depositedDate = "depositedDate is empty ";
  }
  // bank valdation
  if (
    typeof value.bank == "undefined" ||
    !value.bank ||
    value.branch == "---Select the bank---"
  ) {
    errors.bank = "bank name is empty ";
  }
  //branch validation
  if (typeof value.branch == "undefined" || !value.branch) {
    errors.branch = "bank branch is empty ";
  }
  //teacher validaiton
  if (typeof value.teacher == "undefined" || !value.teacher) {
    errors.teacher = "Teacher name is empty ";
  }
  //class validation
  if (typeof value.classes == "undefined" || !value.classes) {
    errors.classes = "Class name is empty ";
  }
  // payment type validation
  if (
    typeof value.type == "undefined" ||
    !value.type ||
    value.type == "---Select a Payment Type---"
  ) {
    errors.type = "Please select a type ";
  }

  // returning the error objects.
  return errors;
};

export default validationReport;

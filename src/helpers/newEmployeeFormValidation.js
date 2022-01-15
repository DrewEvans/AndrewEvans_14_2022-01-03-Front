export default function validateValues(values) {
  const {
    firstName,
    lastName,
    dateOfBirth,
    startDate,
    street,
    city,
    zipCode,
    state,
    department,
  } = values;
  //regex patterns to test strings from contact form
  const nameRegex = /^[a-zA-ZÀ-ÿ,.'-]{2,}$/;
  const spaceRegex = /[\s]{2,}/;

  //new object array to push errros if strings fails regex pattern
  let errors = {};

  //if string fails update user msg with error
  if (!spaceRegex.test(firstName) && !nameRegex.test(firstName)) {
    errors.firstName = "Please enter first name";
  }
  //if string fails update user msg with error
  if (!spaceRegex.test(lastName) && !nameRegex.test(lastName)) {
    errors.lastName = "Please enter last name";
  }

  if (!street) {
    errors.street = "Field is missing";
  }
  if (!city) {
    errors.city = "Field is missing";
  }

  if (zipCode.length !== 5) {
    errors.zipCode = "Must contain 5 numbers";
  }
  if (!state) {
    errors.state = "Please Choose an option";
  }
  if (!department) {
    errors.department = "Please Choose an option";
  }

  return errors;
}

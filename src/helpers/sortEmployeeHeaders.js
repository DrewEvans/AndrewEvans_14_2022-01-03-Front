//function that is called when user clicks on a header/sort and the data is sorted by direction last clicked
export const sortArray = (type, data, sortDirection) => {
  //object of different types the user can sort data by
  const types = {
    city: "city",
    dateofbirth: "dateOfBirth",
    department: "department",
    firstname: "firstName",
    lastname: "lastName",
    startdate: "startDate",
    state: "state",
    street: "street",
    zipcode: "zipCode",
  };

  const sortProperty = types[type];

  let sortParameters;

  //if sortDirection is set to ascend then reverse the sort to show Z-A else sort A-Z
  if (sortDirection === "ascend") {
    //sort function for the all the column header present on the table component
    if (sortProperty === "city") {
      sortParameters = [...data].sort((a, b) => {
        if (b.city < a.city) {
          return 1;
        }
        return -1;
      });
    }
    if (sortProperty === "dateOfBirth") {
      sortParameters = [...data].sort((a, b) => {
        if (b.birthDate < a.birthDate) {
          return 1;
        }
        return -1;
      });
    }
    if (sortProperty === "department") {
      sortParameters = [...data].sort((a, b) => {
        if (b.department < a.department) {
          return 1;
        }
        return -1;
      });
    }
    if (sortProperty === "firstName") {
      sortParameters = [...data].sort((a, b) => {
        if (b.firstName < a.firstName) {
          return 1;
        }
        return -1;
      });
    }
    if (sortProperty === "lastName") {
      sortParameters = [...data].sort((a, b) => {
        if (b.lastName < a.lastName) {
          return 1;
        }
        return -1;
      });
    }
    if (sortProperty === "startDate") {
      sortParameters = [...data].sort((a, b) => {
        if (b.startDay < a.startDay) {
          return 1;
        }
        return -1;
      });
    }
    if (sortProperty === "state") {
      sortParameters = [...data].sort((a, b) => {
        if (b.state < a.state) {
          return 1;
        }
        return -1;
      });
    }
    if (sortProperty === "street") {
      sortParameters = [...data].sort((a, b) => {
        if (b.street < a.street) {
          return 1;
        }
        return -1;
      });
    }
    if (sortProperty === "zipCode") {
      sortParameters = [...data].sort((a, b) => {
        if (b.zipCode < a.zipCode) {
          return 1;
        }
        return -1;
      });
    }
  } else {
    if (sortProperty === "city") {
      sortParameters = [...data].sort((a, b) => {
        if (a.city < b.city) {
          return 1;
        }
        return -1;
      });
    }
    if (sortProperty === "dateOfBirth") {
      sortParameters = [...data].sort((a, b) => {
        if (b.birthDate > a.birthDate) {
          return 1;
        }
        return -1;
      });
    }
    if (sortProperty === "department") {
      sortParameters = [...data].sort((a, b) => {
        if (b.department > a.department) {
          return 1;
        }
        return -1;
      });
    }
    if (sortProperty === "firstName") {
      sortParameters = [...data].sort((a, b) => {
        if (b.firstName > a.firstName) {
          return 1;
        }
        return -1;
      });
    }
    if (sortProperty === "lastName") {
      sortParameters = [...data].sort((a, b) => {
        if (b.lastName > a.lastName) {
          return 1;
        }
        return -1;
      });
    }
    if (sortProperty === "startDate") {
      sortParameters = [...data].sort((a, b) => {
        if (b.startDay > a.startDay) {
          return 1;
        }
        return -1;
      });
    }
    if (sortProperty === "state") {
      sortParameters = [...data].sort((a, b) => {
        if (b.state > a.state) {
          return 1;
        }
        return -1;
      });
    }
    if (sortProperty === "street") {
      sortParameters = [...data].sort((a, b) => {
        if (b.street > a.street) {
          return 1;
        }
        return -1;
      });
    }
    if (sortProperty === "zipCode") {
      sortParameters = [...data].sort((a, b) => {
        if (b.zipCode > a.zipCode) {
          return 1;
        }
        return -1;
      });
    }
  }
  const sorted = sortParameters;
  return sorted;
};

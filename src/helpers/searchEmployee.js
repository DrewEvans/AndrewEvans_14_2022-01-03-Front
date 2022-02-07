//search function to render new list of objects based on user input
export const searchEmployee = (array, searchKey) => {
  //return a modified array
  let results = [];
  //modify the searchkey to lower case chars
  searchKey = searchKey.toLowerCase();

  // filter array prop and return new array if search key includes any of the below
  return (results = array
    .filter((el) => {
      const {
        city,
        birthDate,
        department,
        firstName,
        lastName,
        startDay,
        state,
        street,
        zipCode,
      } = el;
      return (
        city.toLowerCase().includes(searchKey) ||
        department.toLowerCase().includes(searchKey) ||
        firstName.toLowerCase().includes(searchKey) ||
        lastName.toLowerCase().includes(searchKey) ||
        state.toLowerCase().includes(searchKey) ||
        street.toLowerCase().includes(searchKey) ||
        birthDate.includes(searchKey) ||
        startDay.includes(searchKey)
      );
    })
    //return a map of the filtered results
    .map((newArr) => {
      return newArr;
    }));
};

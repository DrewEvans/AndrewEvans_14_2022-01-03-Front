export const searchEmployee = (array, searchKey) => {
  let results = [];
  searchKey = searchKey.toLowerCase();

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
    .map((newArr) => {
      return newArr;
    }));
};

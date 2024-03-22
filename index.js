// Write your solution in this file!
const employee = {
    name: "Rose Pepper",
    streetAddress: "The Otherside",
  };

  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }

  function deleteFromEmployeeByKey(employee, key) {
    const { [key]: deletedKey, ...newEmployee } = employee;
    return newEmployee;
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }

  const updatedEmployeeWithName = updateEmployeeWithKeyAndValue(employee, "name", "John Jones");
  console.log(employee); 
  console.log(updatedEmployeeWithName); 

  destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm St");
  console.log(employee); 
export default function createReportObject(employeesList) {
  const employeesObject = {
    allEmployees: {
      engineering: [],
      sales: [],
      finance: [],
    },
    getNumberOfEmployees(department) {
      return employeesObject.allEmployees[department].length;
    },
  };
  Object.entries(employeesList).forEach((entry) => {
    employeesObject.allEmployees[entry[1]].push(entry[0]);
  });
  return employeesObject;
}

export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;

  let employeeList = [];
  for (const dept of Object.values(allEmployees)) {
    employeeList = employeeList.concat(dept);
  }

  return {
    [Symbol.iterator]() {
      let index = 0;
      return {
        next() {
          if (index < employeeList.length) {
            return { value: employeeList[index++], done: false };
          } else {
            return { done: true };
          }
        },
      };
    },
  };
}


// A) Type alias: Just a new name for an existing complex type to make our lives easy while working with complex types:

// - Define the Employee type: Create a type Employee with properties id (number), name (string), and department (string).

type Employee = {
  id: number
  name: string
  department: string
}

// - Define the Manager type: Create a type Manager with properties id (number), name (string), and employees (an array of Employee)

type Manager = {
  id: number
  name: string
  employees: Employee[]
}

// Two of our Employees
const alice: Employee = {
  id: 24,
  name: 'Alice in Wonder Land',
  department: 'Sales'
}

const smilga: Employee = {
  id: 34,
  name: 'John Smilga',
  department: 'IT'
}

// Our Manager Bob

const bob: Manager = {
  id: 1,
  name: 'Bob Gangu',
  employees: [alice, smilga]
}

// - Create a Union Type: Define a type Staff that is a union of Employee and Manager.
type Staff = Employee | Manager

// - Create the printStaffDetails function: This function should accept a parameter of type Staff. Inside the function, use a type guard to check if the 'employees' property exists in the passed object. If it does, print a message indicating that the person is a manager and the number of employees they manage. If it doesn't, print a message indicating that the person is an employee and the department they belong to.

function printStaffDetails(staff: Staff): void {
  if ('employees' in staff) {
    console.log(`${staff.name} Person is a Managar, managing ${staff.employees.length} employees`)
  } else {
    console.log(`${staff.name} is an Employee in the ${staff.department} department`)
  }
}

printStaffDetails(alice)
printStaffDetails(bob)

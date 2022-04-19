const Employee = require('../lib/Employee.js')

test('creates an employee object', () => {
    const employee = new Employee('employee', 1, 'email');
  
    expect(employee.name).toBe('employee');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('email')

    expect(employee.getRoll()).toBe('employee')
  });
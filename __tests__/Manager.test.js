//const Employee = require('../lib/Employee.js');
const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('manager', 1, 'email');
  
    expect(manager.name).toBe('manager');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('email');

    expect(manager.getRoll()).toBe('Manager')
  });
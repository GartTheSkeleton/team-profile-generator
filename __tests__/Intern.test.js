const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('intern', 1, 'email');
  
    expect(intern.name).toBe('intern');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('email');

    expect(intern.getRoll()).toBe('intern')
  });
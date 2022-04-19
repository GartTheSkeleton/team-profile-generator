const Engineer = require('../lib/Engineer.js');

test('creates a manager object', () => {
    const engineer = new Engineer('engineer', 1, 'email');
  
    expect(engineer.name).toBe('engineer');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('email');

    expect(engineer.getRoll()).toBe('engineer')
  });
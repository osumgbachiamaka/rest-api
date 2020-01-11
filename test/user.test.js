const User = require('../controllers/userCtrl')

beforeEach(() => {
  return response = {
    id: 2,
    firstName: 'Chiamaka',
    lastName: 'Osumgba'
  }
})

// describe('the user', () => {
// 	test('gets a user from the database', (id) => {
// 	expect(User(3)).toBe('chiamaka');
// 	});
// });

describe('User', () => {
  test('getting a user by id', () => {
    User.getAUserById = jest.fn()
    const result = { id: 2, firstName: 'Chiamaka', lastName: 'Osumgba' }

    User.getAUserById.mockReturnValue(response)

    expect(User.getAUserById(2)).toEqual(result)
  })

  test('Must provide id to call a user', () => {
      User.getAUserById = jest.fn()
      User.getAUserById(2);
      expect(User.getAUserById).toHaveBeenCalledWith(2);
  })
})

test('adds 1 + 2 to equal 3', () => {
  expect(User.sum(1, 2)).toBe(3)
})

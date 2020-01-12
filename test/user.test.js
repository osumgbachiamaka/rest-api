const User = require('../controllers/userCtrl')

beforeEach(() => {
  return response = {
    ID: 1,
	firstname: "Chiamaka",
    lastname: "osumgba",
	email: "chiamaka@example.com",
	password: "chi1234",
	userrole: 1,
	createddate: "2020-10-31T23:00:00.000Z",
	updateddate: null
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
    const result = { ID: 1,
		firstname: "Chiamaka",
		lastname: "osumgba",
		email: "chiamaka@example.com",
		password: "chi1234",
		userrole: 1,
		createddate: "2020-10-31T23:00:00.000Z",
		updateddate: null }

    User.getAUserById.mockReturnValue(response)

    expect(User.getAUserById(1)).toEqual(result)
  })

  test('getting a user by id directly from db', () => {
	const result = { ID: 1,
		firstname: "Chiamaka",
		lastname: "osumgba",
		email: "chiamaka@example.com",
		password: "chi1234",
		userrole: 1,
		createddate: "2020-10-31T23:00:00.000Z",
		updateddate: null }
    expect(User.getAUserById(1)).toEqual(result)
  })

  test('Must provide id to call a user', () => {
      User.getAUserById = jest.fn()
      User.getAUserById(2);
      expect(User.getAUserById).toHaveBeenCalledWith(2);
  })
})


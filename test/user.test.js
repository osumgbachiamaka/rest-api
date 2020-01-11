const User = require('../controllers/userCtrl');
// describe('the user', () => {
// 	test('gets a user from the database', (id) => {
// 	expect(User(3)).toBe('chiamaka');
// 	});
// });

describe('a user', () => {
	test('getting a user', (id) => {
		expect(User.getAUserById(2)).toBe('chiamaka osumgba');
	})
});
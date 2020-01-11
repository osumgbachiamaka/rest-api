const User = require('../controllers/userCtrl');
describe('the user', () => {
	test('gets a user from the database', () => {
	expect(User.getAUserById(1)).toBe('chiamaka');
	});
});

// describe('a user', () => {
// 	test('getting a user', () => {
// 		expect(User.getAUserById(2)).toBe('chiamaka osumgba');
// 	})
// });
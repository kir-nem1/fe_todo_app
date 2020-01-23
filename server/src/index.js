const {} = require('./db/models');


const hashPassword = async password => {
try {
	return bcrypt.hash(password, 10);
}catch (e) {

}
};


const createUser = async data => {
	try{
		data.passwordHash = await hashPassword(data.password);
		const createdUser = await User.create(data);
		if (createdUser) {

			return createdUser.get();
		}
		new Error();
		} catch (e) {
		throw e;
	}
};



createUser({
firstName: "name",
	lastName: "surname",
	email: 'test6@gmail.com',
	login: 'test_test11yr'
})
	.then(console.log)
.catch(console.error());

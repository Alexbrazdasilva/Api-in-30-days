const { readFile } = require("fs");

const getUsers = (req, res) => {
	const localDB = `${__dirname}/${process.env.DB_LOCAL}users.json`;
	readFile(
		localDB,
		{ encoding: "utf8" }, (err, data) =>
		!!err
			? res.send("<h1>Erro na requisição</h1>")
			: res.send(data)
	)
}

const getUser = (req, res) => {
	const localDB = `${__dirname}/${process.env.DB_LOCAL}users.json`;
	const { id: idUser } = req.params;
	const userPerId = ({ id }) => id == idUser
	const convertDataDB = data => JSON.parse(data);

	readFile(
		localDB,
		{ encoding: "utf8" }, (err, data) => {
			const { users } = convertDataDB(data);
			const emptyMessage = [{ message: "Not found", "status code": 404, }]
			const getUserOrEmpty = !!users.filter(userPerId).length ? users.filter(userPerId) : emptyMessage;

			res.send(getUserOrEmpty)
		}
	)
}

module.exports = { getUsers, getUser };
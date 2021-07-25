const Mongoose = require("mongoose");

class DB {
	constructor(defaultTable) {
		this.defaultTable = defaultTable;
	}
	async connect() {
		const config = { useUnifiedTopology: true, useNewUrlParser: true };
		const database = await Mongoose
			.connect(`${process.env.DB_URL}/${this.defaultTable}`, config);
		database.then(res => res.once("open", console.log("Conexão estabelecida!")));
	};
	showContentCollection(collectionName, res) {
		this.connect();
	}
}

module.exports = DB;

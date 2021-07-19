module.exports = require("dotenv")
	.config({
		path: process.env.NODE_ENV !== "development"
			? `${__dirname}/dev.env`
			: `${__dirname}/prod.env`
	});
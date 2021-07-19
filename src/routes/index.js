const { Router } = require("express")
const {getUsers, getUser} = require("./../middlewares/Users")

const routes = Router();

routes.get("/users", getUsers);
routes.get("/users/:id", getUser);

module.exports = routes;
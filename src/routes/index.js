const { Router } = require("express")
const DB = require("./../middlewares/Users")

const routes = Router();

routes.get("/", () => (new DB("icomercial-rest").showContentCollection()));
// routes.get("/users", getUsers);
// routes.get("/users/:id", getUser);

module.exports = routes;
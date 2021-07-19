const express = require("express");
const routes = require("./routes/index");
require("./../env/env.config");
const app = express();

app.use(routes);

app.listen(3000, () => console.log(`Rodando na porta ${3000}`));
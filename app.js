const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
const { errorHandlingMiddleware } = require("./middlewares/error-handling.middleware");
const authRouter = require('./routes/auth/index');


const app = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);

app.use(errorHandlingMiddleware);
module.exports = app;
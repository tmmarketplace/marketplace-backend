const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config();

const { DB_HOST, PORT } = process.env;

mongoose
    .connect(DB_HOST)
    .then(() => {
        console.log("Database connect success");
        app.listen(PORT || 3001, () => {
            console.log(`Server running. Use our API on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error.message);
        process.exit(1);
    });
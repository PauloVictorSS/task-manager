const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.static('./'));
app.use(express.json());

const port = process.env.PORT || 5000;

app.get("/", (req, res, next) => {

    console.log("Estamos funcionando");
})


app.listen(port, console.log(`Server is listening on port ${port}...`));
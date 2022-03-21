const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.static('./'));
app.use(express.json());

const port = process.env.PORT || 5000;

app.get("/", (req, res, next) => {

    res.send("Ver todas as tarefas");
});

app.post("/", (req, res, next) => {

    res.send("Adicionando uma tarefa");
});

app.get("/task/:id", (req, res, next) => {

    res.send("Mostrando uma tarefa");
});

app.patch("/task/:id", (req, res, next) => {

    res.send("Atualizando uma tarefa");
});

app.delete("/task/:id", (req, res, next) => {

    res.send("Deletando uma tarefa");
});


app.listen(port, console.log(`Server is listening on port ${port}...`));
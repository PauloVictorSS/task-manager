const express = require('express');
require('dotenv').config();

const app = express();

app.set('view engine', 'ejs');
app.set('views', './view');

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT || 5000;
const allTasks = [{description: "Conversar com o binho sobre o lead de ontem", id:"asd2fd54fdfs"}]

app.get("/", (req, res, next) => {

    res.render('index.ejs', {
        allTasks
    })
});

app.post("/", (req, res, next) => {

    res.send("Adicionando uma tarefa");
});

app.get("/task/:id", (req, res, next) => {

    res.render('task.ejs', {
        task: allTasks[0]
    })
});

app.patch("/task/:id", (req, res, next) => {

    res.send("Atualizando uma tarefa");
});

app.delete("/task/:id", (req, res, next) => {

    res.send("Deletando uma tarefa");
});


app.listen(port, console.log(`Server is listening on port ${port}...`));
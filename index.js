const express = require('express');
const bodyParser = require('body-parser');
const { User } = require('./app/models');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));

User.create({
    name: "Eduardo",
    email: "eduardo@smnti.com.br",
    password: "123456"
});

app.get('/', (req, res) => {res.send('Hello World!')});

app.listen(3000);

app.get('/users', (req, res) => { }); //Listar todos
app.post('/register', async(req, res) => { const user = await User.create(req.body); res.json(user)}); // Criar
app.get('/users/:id', (req, res) => { }); //Buscar
app.put('/users/:id', (req, res) => { }); //Editar
app.delete('/users/:id', (req, res) => { }); //Deletar
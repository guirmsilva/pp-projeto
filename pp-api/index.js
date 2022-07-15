require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');

const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Rotas
const userController = require('./controllers/userController');
app.use('/user', userController);

const loginController = require('./controllers/loginController');
app.use('/login', loginController);

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

mongoose.connect(`mongodb+srv://guirmsilva:${DB_PASSWORD}@portifoliocluster.cwcxt.mongodb.net/portifoliodb?retryWrites=true&w=majority`)
.then(() => {
    console.log('MongoDB Connected');
    app.listen(8000);
})
.catch((err) => {
    console.log('Erro ao conectar ao banco de dados');
});
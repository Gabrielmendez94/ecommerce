import express from 'express';
import productsRouter from './routes/products.router.js'
import mongoose from 'mongoose';
import config from './config/config.js';

//Enviroment Variables
const PORT = config.port, BASE_URL = config.baseurl, MONGO_USER = config.mongo.dbUser, MONGO_PSWD = config.mongo.dbPass, MONGO_HOST = config.mongo.dbHost;

//Server configuration
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.listen(PORT, console.log('Servidor conectado correctamente'));

//Mongoose Connection
const MONGO = `mongodb+srv://${MONGO_USER}:${MONGO_PSWD}@${MONGO_HOST}/mynewecommerce`;
const connection = mongoose.connect(MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use('/api/products', productsRouter);
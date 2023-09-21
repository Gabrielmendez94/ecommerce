import express from 'express';
import ProductManager from './productManager.js';
import productsRouter from './routes/products.router.js'

const app = express();
app.use(express.urlencoded({extended: true}));

app.use('/api/products', productsRouter);

app.listen('8080', console.log('Servidor conectado correctamente'));


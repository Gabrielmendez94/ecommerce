import express from 'express';
import productsRouter from './routes/products.router.js'
import mongoose from 'mongoose';

//Server configuration
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.listen('8080', console.log('Servidor conectado correctamente'));

//Mongoose Connection
const MONGO = `mongodb+srv://mendezgabriel1994:5qMqA6Cndw0h9P1V@cluster0.x3zdcqe.mongodb.net/mynewecommerce`;
const connection = mongoose.connect(MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// TO DO: Aplicar variables de entorno


app.use('/api/products', productsRouter);
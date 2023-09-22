import { Router } from "express";
import ProductManager from "../productManager.js";

const router = new Router();

const nuevoProducto = new ProductManager();
//nuevoProducto.addProduct('Mochila', 'Marca Head', 500, 'image.png', 2424, 50);
//nuevoProducto.addProduct('Cartera', 'Cartera blanca', 500, 'image.png', 2424, 50);
//nuevoProducto.addProduct('Remera', 'Boca Juniors', 500, 'image.png', 2425, 50);
//nuevoProducto.addProduct('Short', 'River Plate', 500, 'image.png', 2426, 50);


router.get('/', (req, res)=>{
    let limit = req.query.limit;
    console.log(limit)
    if(!limit){
        return res.send({nuevoProducto});
    }else{
        let queryLimit = nuevoProducto.getProducts().slice(0, limit);
            return res.send(queryLimit);
    }
});

router.get('/:pid', (req, res)=>{
    const prodId = parseInt(req.params.pid);
    console.log(prodId)
    if(!prodId){
        res.send('Product not found');
    }else{
        const newProduct = nuevoProducto.getProductsById(prodId);
        res.send({newProduct});
    }
});

router.post('/', (req, res) =>{
    const newProducts = req.body;
    const {title, description, price, thumbnail, code, stock} = newProducts;
    nuevoProducto.addProduct(title, description, price, thumbnail, code, stock);
})


export default router;
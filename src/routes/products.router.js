import { Router } from "express";
import { getProducts, getProductsById, createProduct } from "../controllers/products.controllers.js";

const router = new Router();

router.get('/', getProducts);
router.get('/:pid', getProductsById);
router.post('/', createProduct);

/*router.put('/:pid', (res, res)=>{
})
router.delete('/:pid', (req, res)=>{
})*/

export default router;
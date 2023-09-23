export default class ProductManager {
    constructor(){
        this.products = [];
        this.id = 1;
    }

    addProduct = async (title, description, price, thumbnail, code, stock)=>{
        if(!title || !description || !price || !thumbnail || !code || !stock){
            console.log('Todos los campos son obligatorios');
        }else{
            const getId = await this.products.find(product => product.code === code);
            if(getId){
                console.log('Error, código ya existente')
            }else{
                let id;
                this.id++;
                id = this.id;
            const newProduct = {
                title,
                description,
                price,
                thumbnail,
                code,
                stock,
                id
            }
            this.products.push(newProduct);
            console.log('producto agregado correctamente');
            }
        }
    }
    
    getProducts(){
        return this.products;
    }

    getProductsById(id){
        const prodId = this.products.find(product => product.id === id);
        if(prodId){
            return prodId;
        } else{
            console.log('ID Inexistente');
        }
    }

    deleteProductsById(id){
        
    }

}
class ProductManager {
    constructor(){
        this.products = [];
        this.id = 1;
    }

    addProduct(title, description, price, thumbnail, code, stock){
        if(!title || !description || !price || !thumbnail || !code || !stock){
            console.log('Todos los campos son obligatorios');
        }else{
            const getId = this.products.find(product => product.code === code);
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
            console.log({newProduct})
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
            console.log(prodId);
        } else{
            console.log('ID Inexistente');
        }
    }

}
const nuevoProducto = new ProductManager();

nuevoProducto.addProduct('Mochila', 'Marca Head', 500, 'image.png', 2424, 50);
nuevoProducto.addProduct('Cartera', 'Cartera blanca', 500, 'image.png', 2424, 50);
nuevoProducto.addProduct('Remera', 'Boca Juniors', 500, 'image.png', 2425, 50);
nuevoProducto.addProduct('Short', 'River Plate', 500, 'image.png', 2426, 50);
nuevoProducto.getProductsById(4);
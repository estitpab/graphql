import products from './query/products';
import productById from './query/productById';
import img from './products/img';
import stock from './products/stock';

export default{
    Query:{
        products,
        productById,
    },
    Products:{
        img,
        stock,
    }
}
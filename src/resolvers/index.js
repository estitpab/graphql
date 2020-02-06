import products from './query/products';
import productById from './query/productById';
import cartById from './query/cartById';
import img from './products/img';
import stock from './products/stock';

export default{
    Query:{
        products,
        productById,
        cartById
    },
    Products:{
        img,
        stock
    }
}   
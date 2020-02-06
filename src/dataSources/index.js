import knexConnection from '../config/db';
import ProductDataSource from './product';
import StockDataSource from './stock';
import ImageDataSource from './image';
import CartDataSource from './cart';
import PromoDataSource from './promo';

export default{
    product: new ProductDataSource(knexConnection),
    stock: new StockDataSource(knexConnection),
    image: new ImageDataSource(knexConnection),
    cart: new CartDataSource(knexConnection),
    promo: new PromoDataSource(knexConnection)
}
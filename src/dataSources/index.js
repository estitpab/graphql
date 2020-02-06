import knexConnection from '../config/db';
import ProductDataSource from './product';
import StockDataSource from './stock';
import ImageDataSource from './image';

export default{
    product: new ProductDataSource(knexConnection),
    stock: new StockDataSource(knexConnection),
    image: new ImageDataSource(knexConnection),
}
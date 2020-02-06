import {SQLDataSource} from './sql-data-sources';

export default class StockDataSource extends SQLDataSource{
    async getStock(id){
        const result =  await this.knexConnection.raw(
            `SELECT
                *
            FROM
                stock
            WHERE productId = ?
            `,
            [id]
        );
        return result[0][0];
    }
}
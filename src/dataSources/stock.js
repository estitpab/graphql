import {DataSource} from 'apollo-datasource';

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
            return results.rows[0][0]
        );
    }
}
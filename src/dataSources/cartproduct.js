import {SQLDataSource} from './sql-data-sources';

export default class PromoDataSource extends SQLDataSource{

    async getCartProduct(id){
        const result =  await this.knexConnection.raw(
            `SELECT
                *
            FROM
                cartproduct
            WHERE id = ?
            `,
            [id]
        );
        return result[0][0]
    }
}
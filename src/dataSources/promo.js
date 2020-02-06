import {SQLDataSource} from './sql-data-sources';

export default class PromoDataSource extends SQLDataSource{

    async getPromoById(id){
        const result =  await this.knexConnection.raw(
            `SELECT
                *
            FROM
                promo
            WHERE id = ?
            `,
            [id]
        );
        return result[0][0]
    }
}
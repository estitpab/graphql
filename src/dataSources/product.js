import {SQLDataSource} from './sql-data-sources';

export default class ProductDataSource extends SQLDataSource{
    async getProducts(){
        const result =  await this.knexConnection.raw(
            `SELECT
                *
            FROM
                product
            `
        );
        return results[0]
    }

    async getProductById(id){
        const result =  await this.knexConnection.raw(
            `SELECT
                *
            FROM
                product
            WHERE id = ?
            `,
            [id]
        );
        return result[0][0]
    }
}
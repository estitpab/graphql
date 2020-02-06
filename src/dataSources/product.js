import {DataSource} from 'apollo-datasource';

export default class ProductDataSource extends SQLDataSource{
    async getProducts(){
        const result =  await this.knexConnection.raw(
            `SELECT
                *
            FROM
                product
            `
            );
            return results.rows[0]
        );
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
            return results.rows[0][0]
        );
    }
}
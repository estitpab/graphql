import {DataSource} from 'apollo-datasource';

export default class ImageDataSource extends SQLDataSource{
    async getImage(id){
        const result =  await this.knexConnection.raw(
            `SELECT
                *
            FROM
                image
            WHERE productId = ?
            `,
            [id]
            );
            return results.rows[0][0]
        );
    }
}
import {SQLDataSource} from './sql-data-sources';

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
        return result[0][0]
    }
}
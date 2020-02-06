import knex from 'knex';

export default knex({
    client: 'mysql',
    connection:{
        server: 'localhost',
        user: 'root',
        password: 'mysql',
        database: 'graphql',
        port:'3306',
    },
    migration:{
        tableName: 'migrations',
    }
})
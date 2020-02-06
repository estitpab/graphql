import db from '../config/db';



const resolvers = {
    Query: {
        products: async () => { 
            const rows  = await db.raw('SELECT * FROM product');  
            return rows[0]
        } ,
        productById: async (parent, {id}, context, info) =>  {
            const rows = await db.raw('SELECT * FROM product where id = ?', [id])
            return rows[0][0]
        }
    },

    Products:{
        stock: async ({id}, args, context, info) => {
            const rows = await db.raw('SELECT * FROM stock WHERE productId = ?', [id])
            return rows [0][0]
        },
        img: async ({id}, args, context, info) => {
            const rows = await db.raw('SELECT * FROM image WHERE productId = ?', [id])
            return rows [0][0]
        }
    }
};


export default resolvers;
const products = [
    {
        id: '1',
        name: 'Robe',
        price: 20
    },
    {
        id: '2',
        name: 'Jeans',
        price: 39
    },

];


const resolvers = {
    Query: {
        products: () => products,
        productById: (parent, {id}, context, info) => products.find((product) => {
            return product.id === id ? product : null})
    }
};


export default resolvers;
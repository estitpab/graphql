export default async ( parent, args, { dataSources }) => {
    const stock =  await dataSources.stock.getStock(parent.id);

    return stock;
}
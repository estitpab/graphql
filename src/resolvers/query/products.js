export default async (_, args, { dataSources }) => {
    const products =  await dataSources.product.getProducts();

    return products;
}
export default async (_, args, { dataSources }) => {
    const product =  await dataSources.product.getProductById(args.id);

    return product;
}
export default async ( parent, args, { dataSources }) => {
    const img =  await dataSources.image.getImage(parent.id);

    return img;
}
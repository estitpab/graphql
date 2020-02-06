const books = [
    {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    }
];

const authors = [
    {
        id: 1,
        name: 'J.K. Rowling',
    }
];


const resolvers = {
    Query: {
        books: () => books,
        authors: () => authors
    },
};


export default resolvers;
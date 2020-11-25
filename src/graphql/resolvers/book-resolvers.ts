import { dataSources } from '../../datasources';

export default {
    Query: {
        books() {
            return dataSources.bookService.getBooks();
        },
        book(parent, args) {
            return dataSources.bookService.getBook(args.id);
        }
    },
    Review: {
        review_type: (obj: any) => typeof obj.value
    },
};
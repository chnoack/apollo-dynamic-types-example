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
        __resolveType(obj, context, info){
            if(typeof obj.value == "string"){
                return 'WebReview';
            }

            if(typeof obj.value == "number"){
                return 'PollReview';
            }
            return null;
        },
    },
    WebReview: {
        value_string: (obj: any) => obj.value,
        review_type: (obj: any) => "string"
    },
    PollReview: {
        value_float: (obj: any) => obj.value,
        review_type: (obj: any) => "float"
    },
};
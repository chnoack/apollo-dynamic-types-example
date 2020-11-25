import { dataSources } from '../../datasources';
import { pubsub } from '../pubsub';

const BOOK_MUTATED = 'bookMutated';

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
    }
};


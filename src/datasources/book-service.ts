import { DataSource } from 'apollo-datasource';

export class BookService extends DataSource {
    constructor() {
        super();
    }

    initialize() {}

    getBooks() {
        return Promise.resolve(books);
    }

    getBook(id) {
        return Promise.resolve(findBook(id));
    }

}

function findBook(id) {
    return books.find(book => book.id === id);
}


// ----- Initial Data -----


let books = [
    {
        id: 'design-patterns',
        name: 'Design Patterns - Elements of Reusable Object-Oriented Software',
        review: {
            origin: "Poll",
            value: 1.34
        }
    },
    {
        id: 'refactoring',
        name: 'Refactoring - Improving the Design of Existing Code',
        review: {
            origin: "Poll",
            value: 3.4
        }
    },
    {
        id: 'patterns-of-enterprise-application-architecture',
        name: 'Patterns of Enterprise Application Architecture',
        review: {
            origin: "Poll",
            value: 4.3
        }
    },
    {
        id: 'domain-driven-design',
        name: 'Domain-Driven Design',
        review: {
            origin: "Web",
            value: "Super book",
            user: "Super Mario"
        }
    },
    {
        id: 'clean-code',
        name: 'Clean Code - A Handbook of Agile Software Craftsmanship',
        publisherId: 'prentice-hall',
        review: {
            origin: "Web",
            value: "TLDR",
            user: "Jim123"
        }
    },
    {
        id: 'agile-software-development',
        name: 'Agile Software Development, Principles, Patterns, and Practices',
        publisherId: 'pearson',
        review: {
            origin: "Web",
            value: "Love it",
            user: "Lisa"
        }
    }
];

# Apollo GraphQL conflicting types example

Imagine we have a book store service whose only functionality is to provide a list of books with their attributes 
depending on a query. We have a very simple Book model here just containing:

* an ID
* a name
* a review (which represents the last review given to the book)

The implementation in the master branch just provides this. You can query for books:

``
query {
  books {
    name
    review {
     	value
    }
  }
}
`` 

Now we want to change the functionality: a review can either be a 
* _PollReview_ that contains a float value, or a
* _WebReivew_ that contains a string value and the name of the user who wrote the review

If you query for books you either get a _PollReview_ or a _WebReview_ inside the _review_ slot of the _Book_.
How can this be implemented in ApolloServer and queried? I've tried several approaches:

* union type: see _union-type_ branch of this project
* interface type: see _interface-type_ branch of this project

Both approaches fail when querying for books: 

_Fields "value" conflict because they return conflicting types String and Float. Use different aliases on the
fields to fetch both if this was intentional._


## Dev Build

```bash
yarn
yarn dev
```

Now point your browser to http://localhost:4000/. You will see GraphQL
Playground, an interactive development environment to test the GraphQL API.
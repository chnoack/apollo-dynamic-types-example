# Apollo GraphQL conflicting types example (BookStore)

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
* Poll Review that contains a float value, or a
* Web Review_that contains a string value and the name of the user who wrote the review.

We can imagine other types also. This should be just a simple example of return values that might 
have different types in the same slot/attribute. This might happen when you want to visualize generic data
coming from a backend service.  Here we have a clash between dynamic types from the backend and static types in
the Apollo API.

If you query for books you then should either get a _PollReview_ or a _WebReview_ inside the _review_ slot of the _Book_.
Both should contain a _value_ attribute inside the review.

## Approaches (failing)

How can this be implemented in ApolloServer and queried? I've tried several approaches:

* union type: see branch **union-type** of this project
* interface type: branch see **interface-type** of this project

Both approaches fail when querying for books: 

``Fields "value" conflict because they return conflicting types String and Float. Use different aliases on the
fields to fetch both if this was intentional._``

## Solution (working)

I found three different solutions to this - all of them not very nice, but working.

* see branch **union-type-solution**
* see branch **interface-type-solution**
* see branch **always-string-solution**

## Dev Build

```bash
yarn
yarn dev
```

Now point your browser to http://localhost:4000/. You will see GraphQL
Playground, an interactive development environment to test the GraphQL API.
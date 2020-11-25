# Apollo GraphQL conflicting types example (BookStore)
## interface-type example

See README.md in the master branch for detailed explanation of the problem.
This branch contains the following solution:

The book contains either a _WebReview_ or a _PollReview_. Both implement the _Review_ interface. The _WebReview_ provides
a _value_ of type _String_ and the _PollReview_ provides a value of type _Float_.

This query fails:

```
query {
  books {
    name
    review {
      ... on WebReview {
        origin
        user
     	value
      }
      ... on PollReview {
        origin
        value

      }
    }
  }
}
```

This is the error:

```
Fields "value" conflict because they return conflicting types String and Float. Use different aliases on the fields to fetch both if this was intentional.
```

See branch **interface-type-solution** for a possible fix.

## Dev Build

```bash
yarn
yarn dev
```

Now point your browser to http://localhost:4000/. You will see GraphQL
Playground, an interactive development environment to test the GraphQL API.
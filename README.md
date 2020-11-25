# Apollo GraphQL conflicting types example (BookStore)
## union-type solution

See README.md in the master branch for detailed explanation of the problem.
This branch contains the following solution:

A book's review is a union type and either _WebReview_ or _PullReview_. It contains a _review_type_ 
that enables the frontend to either select **value_string** or **value_float** depending on the
provided type.

## Dev Build

```bash
yarn
yarn dev
```

Now point your browser to http://localhost:4000/. You will see GraphQL
Playground, an interactive development environment to test the GraphQL API.
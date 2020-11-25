# Apollo GraphQL conflicting types example (BookStore)
## all-values-are-strings solution

See README.md in the master branch for detailed explanation of the problem.
This branch contains the following solution:

* there is just one Review type 
* the value is always of type string
* the review contains information about the original type
* the client has to handle the different types

## Dev Build

```bash
yarn
yarn dev
```

Now point your browser to http://localhost:4000/. You will see GraphQL
Playground, an interactive development environment to test the GraphQL API.
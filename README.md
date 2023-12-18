N-layers

database
    - a file which stores all application data

src (all source code)
    - entities: object mappings
    - factories: instance generators
    - repositories: data access
    - routes: endpoint mappings
    - services: communication between the routes and repositories layer (business logic)
    - util: shared code
    - handler: communication between routes and server
    - index: server instance

tests (all automated test suites)
    - integration tests:
        testing on the user point of view. It's also an E2E test because there's no app consuming it

    - unit tests:
        all tests that must run without any external connections such as databases, external API's and on our case, the file system 
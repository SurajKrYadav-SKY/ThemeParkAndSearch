### Search Service

- Create Ticket
- Delete Ticket
- Update Ticket
- Search Ticket

  - Based on multiple filtration criteria we can search for tickets
  - Pagination
  -

- this is the folder structure that is being followed

  - src/

    - index.js // server
    - models/
    - controllers/
    - middlewares/
    - services/ --> Services will be directly communicating with the repository. It will contain the business logic
    - utils/
    - config/
    - repository/ --> In the repository, we will be writing the code that will interact with the models in the database

  - tests // this will be unit testing [later]
  - static/
  - temp/

### DB Design

- Park Table
- Park Timing Table
- City

### Relationship

- city --1:n-- Parks i.e A city can have multiple parks but one park belongs to a city
- park --1:n-- park timing i.e a park can have multiple opening and closing timing.

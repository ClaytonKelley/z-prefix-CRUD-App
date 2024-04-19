# Requirements
Must have docker installed and setup correctly


# Installation

Clone this repo

Future features will have this done automatically. Until the please follow the following instructions.

### Navigate into client/frontend and run the following command

 - `npm install`

### Navigate into /server and run the following command

- `npm install`

### Navigate into the root directory and run the following command

- `docker compose up -d`


## Database Seeding
If you want to initilize the database with dummy data and accounts run the following command in the /server folder after the docker containers are running.

- `knex migrate:latest`
- `knex seed:run`


## login
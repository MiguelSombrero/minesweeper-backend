# Minesweeper backend

> You cannot call yourself a programmer, if you haven't implemented minesweeper

Said propably no one ever. Even so, I like minesweeper. And Windows 10 minesweeper is bloated with adds and unnecessary eye candy. So here is a simple version of the game, without fancy animations.

## Minesweeper live

This app is running live on Heroku:
(might not stay up forever though)

[Minesweeper - Heroku](https://tranquil-cove-34394.herokuapp.com/)

## Implementation

Backend is serving frontend as a static content from folder `src/main/resources/static/build`. Frontend code can be found in [Minesweeper frontend](https://github.com/MiguelSombrero/minesweeper)

### Development stack

Backend
- Java 8
- Spring Boot 2.2.5

Frontend
- ReactJS

Database
- PostgreSQL

Deployment
- Docker
- Docker compose

## Clone the project

    git clone https://github.com/MiguelSombrero/minesweeper-backend.git
    cd minesweeper-backend

## Run with Docker

Application root folder contains Dockerfile and docker-compose.yml files, where you can configure you deployment. Application is using postgreSQL image as database. Note that postgreSQL is mounted on `./data` folder, where application stores it's data. You can change these settings from docker-compose.yml. 

### Build docker image and start

    docker-compose build
    docker-compose up

## Run with Gradle

If you are not using docker images, you need to specify a database. Database connection variables can be found from `application.properties` file:

    spring.datasource.url=${DATABASE_URL}
    spring.datasource.username=${USERNAME}
    spring.datasource.password=${PASSWORD}

You need to specify corresponding environment variables to connect the database.

## Build and run with Gradle

    gradle build
    gradle bootRun

## Application is running on port 8080

    http://localhost:8080

## Implementation notes

Original minesweeper has functionality for opening all the surrounding tiles, when clicking both mouse buttons at the same time (if adjacent tiles have enough flags). I have implemented this with clicking only primary button. It was easier, and in my opinion, better.

Now user can hit mine with the first tile. Board should be created after the first press.
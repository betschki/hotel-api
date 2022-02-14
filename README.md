# Generic Hotel API

Generic Hotel API for a basic hotel booking system created with NestJS and SQLite.

_(this is a hobby project to learn NestJS)_

## Table of contents

- [Generic Hotel API](#generic-hotel-api)
  - [Table of contents](#table-of-contents)
  - [ToDos](#todos)
  - [General info](#general-info)
    - [Hotels](#hotels)
    - [Room Categories](#room-categories)
    - [Rooms](#rooms)
    - [Guests](#guests)
    - [Reservations](#reservations)

## ToDos

- [x] Develop `/hotels` route
  - [x] split `address` into address Object instead of string
  - [x] implement `/:id/rooms` after basic `/rooms` route is created
  - [ ] add "number of rooms" to `GET /hotels/:id` [Issue](https://github.com/betschki/hotel-api/issues/2)
  - [x] implement `/:id/categories` after basic `/categories` route is created
- [x] Develop `/rooms` route
- [x] Develop `/categories` route
- [x] Develop `/reservations` route
  - [x] add `/:id/rooms` route
- [x] Develop `/guests` route
  - [x] add `/:id/reservations`
- [ ] Set up typeorm relations (`POST`)
  - [x] hotel --> rooms (OneToMany)
  - [x] rooms --> hotels (ManyToOne)
  - [x] categories --> rooms (OneToMany)
  - [x] rooms --> categories (ManyToOne)
  - [x] hotel --> cateogies (OneToMany)
  - [x] categories --> hotels (ManyToOne)
  - [x] reservations --> categories (ManyToMany)
  - [x] categories --> reservations (ManyToMany)
  - [x] reservations --> rooms (ManyToMany)
  - [x] rooms --> reservations (ManyToMany)
  - [ ] reservations --> guest (ManyToOne)
  - [ ] guest --> reservations (OneToMany)
- [ ] Set up typeorm relations for `PATCH` methods
  - [ ] `/hotels`
  - [ ] `/rooms`
  - [ ] `/categories`
  - [ ] `/reservations`
  - [ ] `/guests`
- [ ] add Swagger for API documentation
- [ ] add validation that `POST /rooms` can only contain `roomCategory` that belongs to `hotel` in request
- [ ] add validation that roomNumbers cannot be used multiple times in same hotel
- [ ] Strategy for date availability checker
- [ ] Integrate authentication
- [ ] Connect with Webflow API (as database option)

## General info

This project serves a simple hotel booking system API that includes the following aspects (CRUD):

- **hotels** can be created, viewed, updated, and deleted
- **room categories** can be created, viewed, updated, and deleted
- **rooms** can be created, viewed, updated, and deleted
- **guests** can be created, viewed, updated, and deleted
- **reservations** can be created, viewed, updated, and deleted

### Hotels

A hotel has basic information, such as:

- id
- hotel name
- star rating
- address
- number of rooms (dynamic, based on rooms attached to hotel)
- room categories (dynamic, based on room categories attached to hotel)

### Room Categories

Room categories are always tied to a hotel. One room category can not have multiple hotels, but a hotel can have multiple room categories. The name of the room category is shown in the frontend of the booking system (and therefore what a guest books)

A room category has basic information, such as:

- id
- hotel
- name
- number of rooms (dynamic, based on rooms attached to room category)
- balcony [*true/false*]
- baththub [*true/false*]
- shower [*true/false*]
- view _[*park, inland, sea view, partial sea view, sea front*]_
- number of adults per room
- number of children per room
- price per night

### Rooms

A room is tied to a room category and a hotel. Rooms are identified by their room number. The room name (e.g. displayed in a booking frontend) derives from the room category, therefore an individual room has no name.

A room has basic information, such as:

- id (primary key in database)
- room number (individual to the hotel's numbering system)
- hotel
- room category
- size
- smoking allowed [*true/false*]
- pets allowed [*true/false*]

### Guests

Guests can have multiple reservations and have basic information, such as:

- id
- name
- gender
- preferred payment method
- billing address
- staff notes

### Reservations

Reservations are connected to guests, room categories, and rooms. When a guest makes a reservation, only a room categroy is assigned. Hotel staff can later on assign an individual room. One reservation can have multiple room (categories).

Reservations have basic information, such as:

- id
- guest
- hotel
- room categories
- rooms
- arrival date
- departure date
- total price
- number of adults
- number of children
- pets
- notes

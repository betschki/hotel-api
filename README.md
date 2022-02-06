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
  - [ ] split `address` into address Object instead of string
- [ ] Develop `/rooms` route
- [ ] Develop `/rooms/categories` route
- [ ] Develop `/reservations` route
- [ ] Develop `/guests` route
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

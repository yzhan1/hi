# nT Load Balancer

[![Maintainability](https://api.codeclimate.com/v1/badges/5eee9350994c411a4230/maintainability)](https://codeclimate.com/github/yzhan1/nt-load-balancer/maintainability)

Load balancer for nanoTwitter, written in Node.js with Express.

### Functionality
The load balancer sits in front of all our microservices (reader 1, reader 2 and write service). It redirects all `POST` requests to write service, and dispatches `GET` service to one of reader 1, reader 2 and write service using a timestamp based hash function. The hash function favors reader 1 and reader 2 over write service since we want to save the resources on write service for `POST` requests and database accesses.

### Getting Started
To run the app:
+ `cd` into the repo folder
+ Run `npm i` to install dependencies (this requires you to have `npm` installed)
+ Start app by `npm start` and visit `localhost:3000`. Notice that you might need to start the read service and write service to make the app fully functional
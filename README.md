# Social.ly

Social.ly is a social events hub and networking platform that allows people to chat before, during and after an event.

## Team

  - __Product Owner__: Emma V. Rios
  - __Scrum Master__: Misaki Matsumoto
  - __Senior Fullstack Engineer__: Rochelle Valdez
  - __Fullstack Engineer__: Joanna Wheeler

## Table of Contents

1. [Team](#team)
1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
1. [Contributing](#contributing)

## Usage

1) Join Social.ly with your email address, Facebook or Google account.

![Alt text](https://im.ezgif.com/tmp/ezgif-1-e46972cec9.gif)


2) Browse a list of events happenning all over the world, view events on a map and easily get directions or create and host your own events.

Ex: Map View

![Alt text](https://im.ezgif.com/tmp/ezgif-1-2dc1945e9a.gif  "Mapview")



3) Join an event and chat, share photos, gifs and emojis with other event participants.
4) Keep track of events you've joined and stay in touch with the communities you've joined.

## Requirements

- React 15.5.3
- Node 0.0.0
- Express 4.15.2
- PostgreSQL 6.1.5
- Sequelize 3.30.4
- Enzyme 2.8.2
- Karma 1.6.0
- Webpack 2.3.3
- Auth0-Lock 10.14.0
- Socket.IO 1.7.3

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
npm start
nodemon server.js
```

Fork and clone the respository to your local machine. Use npm install to install the required dependencies. To start the app you can use: npm run build or npm start which builds then runs the app. Run the local server using node server.js or nodemon server.js.

Point your browser to localhost:8080 and have fun!

We used Auth0 for authentication and Google Maps API, which you will need to obtain your own API Key to use within the app.

### Roadmap

View the project roadmap [here](https://github.com/merj4/merj/issues)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
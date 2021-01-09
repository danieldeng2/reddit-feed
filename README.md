# Reddit Feed

A web app that integrates with Reddit’s API to show the top articles in a given subreddit.

Travis CI is enabled in this repository to run tests on the server code.

Application deployed on Heroku: [https://redditfeed.herokuapp.com/](https://redditfeed.herokuapp.com/)

## Overview

#### API endpoint

An API endpoint is available at `/api/articles/{subredditName}`, which responds to `GET` requests by returning information about top articles in that subreddit.

Optional parameters:

- `limit`: the maximum number of items desired, defaults to 25
- `timeframe`: the timeframe in which the posts are top of, one of `hour`, `day`, `week`, `month`, `year`, `all`.

The response(JSON format) contains:

- `subreddit`: The subreddit in which the posts came from
- `limit`: The actual number of articles returned
- `articles`: Top articles in that subreddit, a list of objects with the following fields:
  - `id`: Unique identifier of that article
  - `score`: Upvotes of that article minus downvotes
  - `timestamp`: When the article was created
  - `title`: Title of the article in `Markdown`
  - `link`: Link of the article
  - `content`: text content of the article in `Markdown`

#### User Interface

A react client is availaible [at the root directory of the site](https://redditfeed.herokuapp.com/). The website defaults to showing a list of articles from `r/all` until a subreddit is specified.

## Frameworks

Multiple frameworks and libraries were used in the development of this project.

- Backend
  - **Node.js** is used as the runtime environment
  - **Express.js** is used as the server
  - **Jest** and **Supertest** are used as testing frameworks
- Frontend
  - **React.js** is used to build the single-page application
  - **React-Bootstrap** is used as the CSS framework
  - **Jest** and **jest-dom** are used as testing frameworks

## Instructions

To run the application locally, first you need to clone the repository and install the dependencies.

```
# clone the repository
git clone https://github.com/danieldeng2/reddit-feed.git
cd reddit-feed/

# install dependencies for the backend
yarn install

# install dependencies for the frontend
cd client && yarn install
cd ../
```

In the project root directory, you can run:

#### `yarn start`

Runs the server without change detection, use this for deployment.

The APIs will available at [http://localhost:5000/api/](http://localhost:5000/api/).

#### `yarn run dev`

Runs the server for development. The server will auto restart if changes are detected.

The APIs will available at [http://localhost:5000/api/](http://localhost:5000/api/).

#### `yarn run client`

Runs the client code for development.

The UI will available at [http://localhost:3000/](http://localhost:3000/).

#### `yarn run stack`

Runs both the server and the client in development mode.

The APIs will available at [http://localhost:5000/api/](http://localhost:5000/api/).

The UI will available at [http://localhost:3000/](http://localhost:3000/).

#### `yarn run test`

Runs tests on the server code using jest.

#### `yarn run test:client`

Runs tests on the client code using jest.

## How It Works

#### Server

The server code has it's entry point at `server.js`, and is structured as follows:

- `app.js` : Sets up and runs the application, separate from `server.js` for ease of testing
- `adapters/redditAdapter` : Adapter that communicates with reddit.com. A Mock version with mock data is used in testing
- `routes/api` : API endpoint that listens for a GET request and responds with the correct data
- `services/fetchArticles` : A service object that handles business logic. Responsible for parsing data into a useful format as well as validation
- `tests/*` : unit and integration tests for the server code

#### Client

The client code is all inside `/client` of this repository for ease of deployment. The React code is all inside the `/src` directory

- `index.js` : Entry point of the application
- `constants/routes` : Stores the location of API endpoints and returns the correct version depending on development environment
- `components` : React components of the application along with unit tests of those components

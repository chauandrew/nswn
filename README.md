# N S W N
GPLA New Student Welcome Night site. Check out the live deployment 
[here](https://nswn.herokuapp.com/)!


## Introduction
Hi friends! We're using React/Nodejs for our site. The site is hosted using
Heroku, and automatically deploys when we push to master. We use bootstrap for
styling.

Here's a layout/map of what the directory structure looks like:

```bash
/nswn
  README.md             # This file
  package.json          # Dependencies / scripts
  package-lock.json
  index.js              # Backend js server
  /client               # Front-end React files
    package.json
    package-lock.json
    /public             # Publicly hosted site data
      ...
    /src                # React files / components
      /components       # React Components, each folder hosts a js/css file
        ...
      /assets           # Static images, etc.
      App.js            # Main React component that contains other components
      index.js          # Entry point for React into DOM
      ...
  ...
```

## Getting Started

The `client` folder hosts the react front end. The root folder hosts the backend
node server using `express.js`. Here are some dependencies you'll need to work
through in order to run locally:

1. Before anything else, you'll need to install both `nodejs` and `npm`. 

2. Then install packages / dependencies in the root and client folders. You'll 
   need to run `npm install` from both the root folder and the client folder.

3. Then, to run the server, run `npm run dev` from the root directory. 

4. After some time, the application window should automatically open in your 
   browser. If it doesn't, navigate to `http://localhost:3000` in a browser and
   you'll see the application running. It should be configured to hot-reload 
   as you update files

## Available Scripts

From the root directory, you can run:

### `npm run dev` 
Runs both the front-end and back-end servers locally on ports 
3000 and 4000 respectively. This is meant to be used for development, so 
files should hot-reload as you make adjustments to them. **Alternatively, if**
**you only want to run the front end, run** `npm start` **from** `/client`.

### `npm build` 
Initializes the build for production - in particular, it 
compiles the front-end scripts so that the backend serves static html
instead of js. 

### `npm start`
Runs the backend server alone. Intended use is for production
environments.


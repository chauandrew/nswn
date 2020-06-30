# N S W N
GPLA New Student Welcome Night site. 


## Introduction
Hi friends! We're using React/Nodejs for our site. Here's a layout/map of what
the directory structure looks like:

```python3
/nswn
  README.md             # This file
  package.json          # Dependencies / scripts
  package-lock.json
  index.js              # Runs node/express in production
  /client
    package.json
    package-lock.json
    /public             # Publically hosted site data
      ...
    /src                # React files / components
      /components       # React Components
      /css              # Css files
      /images
      App.js
      index.js
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



# React Application edimca/helpdesk-front

## Brief

helpdesk-front is a front-end over React, using edimca/helpdesk-back REST services. The project is the front-end of edimca helpdesk project.

## Built With

- Git - [Download & Install Git](https://git-scm.com/downloads). Free and Open-Source distributed version control system.
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager. If you encounter any problems, you can also use this
- Npm - [Npm Package Manager](https://www.npmjs.com/) is the default package management system for Node.js
- React- [Download & Install React](https://reactjs.org) A JavaScript library for building user interfaces

## Running the application locally

There are several ways to run a React App

- Download the zip or clone the Git repository.

```sh
git clone https://github.com/wquillupangui/helpdesk-front.git
```

- Unzip the zip file (if you downloaded one)
- Edit the `helpdesk-front\src\Config.js` file with the REST services (helpdesk-back) endpoint:

```json
const prod = {
  url: {
    API_URL: "http://localhost:8080"
  }
};
const dev = {
  url: {
    API_URL: "http://localhost:8080"
  }
};
```

- Open Command Prompt and Change directory (cd) to folder containing package.json

- To install the dependencies, run this in the application folder from the command-line:

```
npm install
```

- To run the app in the development mode
  run this in the application folder from the command-line:

```
npm start
```

- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Alternatively you can do a [Deployment](https://facebook.github.io/create-react-app/docs/deployment) like so:

````

npm install -g serve
serve -s build

```

## Author

- **[Washington Quiillupangui](https://github.com/phillipjohnston)**
```
````

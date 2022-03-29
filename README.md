
# Bitstop React Redux TS Template
[![CircleCI](https://circleci.com/gh/bitstopco/bitstop-react-redux-ts-template/tree/develop.svg?style=svg&circle-token=17a2cb6f03ae1715d1808935919baac10d99563a)](https://circleci.com/gh/bitstopco/bitstop-react-redux-ts-template/tree/develop)

Table of Contents

1. [Getting Started](./#getting-started)
	* [Prerequisites](./#prerequisites)
	* [Setup](./#setup)
2. [Libraries](./libraries)
3. [Project Structure](./project-structure)
4. [Available Scripts](./#available-scripts)

## Getting Started

### Prerequisites

Ensure the following requirements are installed.

* [NodeJS >=16](https://nodejs.org/en/)
* [ts-node](https://github.com/TypeStrong/ts-node)

### Setup

```
git clone git@github.com:bitstopco/bitstop-react-redux-ts-template.git <new-project>
cd <new-project>
npm install
```

## Libraries
[React](https://reactjs.org/)

[Redux](https://redux.js.org/)

[Redux Toolkit](https://redux-toolkit.js.org/)

Learn more about **Redux Toolkit** and why we chose it over the classic Redux implementation.

[Redux vs Redux Toolkit](https://blog.openreplay.com/redux-is-dead-long-live-redux-toolkit)

## Project Structure

    .
    ├── build                           # Compiled files
    ├── public                          # Public files
    ├── src                             # Source files
    │   ├── config                      # App configs
	│	│	├── store.ts                # Store configuration
    │   │	└── hooks.ts		        # Redux Hooks
    │   └── slices				        # Slices
    │	│	├── ...                     # Load and stress tests
    │	│	├── counter                 # Slice folder sample
    │   │   │   ├── index.ts            # Index file
    │   │   │   └── reducers.ts		    # Reducers
    │   │	└── state		            # Initial states
    │   │       ├── ...
    │   │		├── counter.ts          # Initial state sample
    │   │   	└── interfaces		    # States models
    │   │             ├── ...
    │   │             └── counter.ts    # State model sample
    ├── test                            # Automated tests (alternatively `spec` or `tests`)
    ├── LICENSE
    └── README.md
 

## Available Scripts

In the project directory, you can run:

### `npm start`


Runs the app in the development mode.<br />

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


The page will reload if you make edits.<br />

You will also see any lint errors in the console.


### `npm test`


Launches the test runner in the interactive watch mode.<br />

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


### `npm run build`


Builds the app for production to the `build` folder.<br />

It correctly bundles React in production mode and optimizes the build for the best performance.


The build is minified and the filenames include the hashes.<br />

Your app is ready to be deployed!

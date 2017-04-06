# Cath Boilerplate #

### Tools

I used this react starter kit https://github.com/Stanko/react-redux-webpack2-boilerplate and made some custom updates

The project is using the following packages:
React,
React router,
Redux,
Redux Thunk,
Redux Logger,
React Router Redux,
Webpack 2 (development and production config),
Hot Module Replacement,
Babel,
SASS with autoprefixing,
ESLint,
`es6-promise` and `isomorphic-fetch`,
File imports relative to the app root,

and Redux Dev Tool Extension
(Add chrome app Redux DevTools https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ennp)


What's missing:
Tests (Jest),
Flow for type checking

### Setup

```
$ npm install
```

### Running in dev mode

```
$ npm run start
```

Wait a bit and `http://localhost:3000/` will open in your browser


### Build (production)

Build will be placed in the `build` folder.

```
$ npm run build
```


### Linting

For linting I'm using [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb),
but some options are overridden to my personal preferences.

```
$ npm run lint
```

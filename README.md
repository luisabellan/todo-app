# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn coverage`

Launches the test coverage (Istanbul).\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn format`

Launches prettier to format the code.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## Scripts

```
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jest-environment-jsdom-sixteen",
    "eject": "react-scripts eject",
    "coverage": "npm run test -- --coverage --watchAll=false",
    "test:integration": "cypress run",
    "coverage:integration": "start-server-and-test 3000 test:integration",
    "prepare": "husky install",
    "lint": "eslint .",
    "lint:fix": "eslint --fix .",
    "format": "prettier --write \"**/*.+(js|jsx|json|yml|yaml|css|scss|md)\"",
    "cypress:open": "cypress open",
    "cy:open": "cypress open",
    "test2:jest": "jest __tests__",
    "test2:cy": "cypress run",
    "test2": "npm run test2:jest && npm run test:cy",
    "pretest2": "rm -rf .nyc_output || true",
    "posttest2": "npm run report:combined",
    "mkdir:reports": "mkdir reports || true",
    "precopy:reports": "npm run mkdir:reports",
    "copy:reports": "cp cypress-coverage/coverage-final.json reports/from-cypress.json && cp jest-coverage/coverage-final.json reports/from-jest.json",
    "precombine:reports": "npm run copy:reports && mkdir .nyc_output || true",
    "combine:reports": "npx nyc merge reports && mv coverage.json .nyc_output/out.json",
    "prereport:combined": "npm run combine:reports",
    "report:combined": "npx nyc report --reporter lcov --reporter text --report-dir coverage",
    "sb":"react-scripts storybook"

  },
```

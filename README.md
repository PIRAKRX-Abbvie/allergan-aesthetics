# AGNCorporateStaticAAGlobalLanding

This project is a web application for the Allergan Aesthetics. This project is a single page application developed with [Angular](https://angular.io/) and was bootstrapped with the [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3. To view more information see the README.angular.md in the same folder as this file.

It is a

# Key Dependencies

**@angular/localize** - Internationalization framework\
**@angular/router** - Routing\
**@fortawesome/** - Icon library\
**bootstrap** - UI components and responsive design framework\
**eslint** - JavaScript linter\
**ng-bootstrap** - Angular components for implementing Bootstrap\
**prettier** - Code formatter\
**scully** - Static site generator\

# Development Environment Setup

1. Install >= Node 12.x (if not already installed)
2. Run "npm install" from terminal

# Code Organization

**/mock-api**\
Mock api server to use for local development without the need for a running api server. This is used untl a backend api is ready. This is a seperate application from the main application.

To set it up:

- go into the mock-api folder
- run `npm install`.

After the dependencies have been installed, you can run it by using:

- `npm start` from within the mock-api folder
- `npm run start:api` from the root of the app.

**/src/app**\
Each custom component lives here in its own sufolder. Component folders will also contain styles and sub-components directly related and specific to that component.

For better code organization, modules are created for sections. If the module contains pages, it will be loaded lazily through routing. If the module only contains components, it will be imported in AppModule. Each module folder will contain all of the pages, components, interfaces, and services used specicially in this module.

**/src/assets**\
Static files that are not imported by React application and must retain their filename.

**/src/constants**\
Groups of constants used throughout the application.

**/src/environments**\
Angular's default enviroment configuration folder. Not used in this project. See Environment Variables section below.

**/src/locale**\
Translation files used with internationalization.

**/src/styles**\
Code for the global store and each slice

**/src/models**\
Global models used throughout the site

**/src/services**\
Global services used throughout the site

**/src/styles**\
Global and common styles.

# Code Styling

- This project follows the [tslint](https://www.npmjs.com/package/eslint-plugin-react) style guide
- IDEs should have ESLint and Prettier extensions installed for real time linting and formatting.
- All code must be successfully linted prior to pull request.

# Unit Tests

- This project is configured with Jest and Testing Library for unit testing.
- Unit tests will reside in the same folder as the source file it is testing.
- Unit tests should have same name as the source file it is testing but end with ".test.js"
- All unit tests must successfully run prior to pull request.

# Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:4200](http://localhost:4200) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm test:once`

Launches the test runner and then quits.

### `npm test:coverage`

Launches the test runner and creates a code coverage report.

### `npm lint`

Runs the linter and reports and issues.

### `npm lint:fix`

Runs the linter and automatically fixes any issues that it can.

### `npm build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Naming Conventions

- All naming should be descriptive and understandable.
- All folder names and file names should be lowercase with words separated by hyphens (e.g. service-worker.js).
- Component classes or functions should be named with title case (e.g. AppHeader).
- Component folders should match the name of the component class/function, but hyphenated (e.g. app-header).
- Page component names should end with "Page" (e.g. DashboardPage).
- Non-page components do not need a suffix.
- Style names should be lowercase with words separated by hypens (e.g. page-title)
- Sass files should be prefixed with an underscore if they are only intended to be imported into other sass files (e.g. \_variables.scss)

---

## Environment Variables

Angular is setup that the stage specific environment variables are loaded on build. This is not ideal, because then a build would have to be created for each environment, as opposed to building the code once. To avoid a build per environment, a ConfigService was created that loads the config variables and this is used instead of the built in environment variables.

### Loading config

The configuration is loaded when the application is initialized. This makes sure that the configuration is loaded before anything else, to make sure we have the values when they are needed. Ideally, this is done using a provider named APP_INITIALIZER. This is a hook into the app lifecycle process that prevents the app from loading until all promises are complete.

However, when including Google Tag Manager, APP_INITIALIZER does not work. Every APP_INITIALIZER provider runs concurrently. Unfortunately, the GTM config providers that are needed to run angular-google-tag-manager, require the config to already be loaded. Also, the GTM provders do not accept promises. To get around this, the configuration is retrieved in main.ts, before boostrapping the application and they are passed into the ConfigService when bootstraping.

There is an open issue to track asynchronous providers [https://github.com/angular/angular/issues/23279] which is where this temporary solution came from [https://github.com/angular/angular/issues/23279#issuecomment-766638619]. Once a better solution is implements, this can be put back to use APP_INITIALIZER and the configService.


min node 12

dev angular

dev scully

build

view Angular readme

# Angular Tasks Manager

This is an Angular-based project that allows task management. It is part of a challenge from the Platzi Angular School.

![preview](https://i.imgur.com/et5mmr7.png)

## Installation

1. Clone the repository to your personal space on your computer.
2. Install dependencies using the command `npm install`.
3. Check the development environment by running the command `ng serve`.

---
### Installation of E2E Testing Environment

1. Install requirements for E2E testing with the command `npm run e2e:install`.
1. Verify that E2E tests run successfully using the command `npm run e2e`.

## Configuration

The project comes with an initial configuration, which is typical for Angular projects and is ready to incorporate functionalities.

├── README.md
├── angular.json
├── dist
├── e2e
├── karma.conf.js
├── node_modules
├── package-lock.json
├── package.json
├── playwright.config.ts
├── src
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json


### Scripts

- The command `npm run build` runs Webpack in production mode and places production files in the `/dist/app` folder.
- The command `npm run e2e` runs [E2E tests](#tests) using [Playwright](https://playwright.dev/).
- The command `npm run start` launches a development mode server with live reload.
- The command `npm run start:prod` starts a server using `http-server` with the `/dist/myapp` folder, which contains production files. Before running this command, make sure to run `npm run build`.

## Credits

- [TodoMVC Project](https://todomvc.com/)
- [MyDayApp - JavaScript](https://github.com/platzi/laboratorio-mydayapp-js)

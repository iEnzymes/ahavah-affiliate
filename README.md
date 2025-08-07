<div style="text-align:center;">
  <img src="https://api.iconify.design/logos:angular-icon.svg" alt="Angular brand" width="100" height="100"/>
</div>

<h1 style="text-align:center;">Angular Material Template</h1>

<br>

Welcome to our Angular Material Template, a comprehensive starting point for your Angular projects. Built with Angular 17, our boilerplate empowers developers with the latest features and enhancements, ensuring robust, scalable, and maintainable applications.

## Converge Design System

- [Figma](https://www.figma.com/design/560jChTXFvFhkhcCjvNsrM/CNVRG-Design-System-3.1)

## Features

- [Angular 17](https://angular.dev/)
- [Angular Material](https://material.angular.io/)
- [TailwindCSS](https://tailwindcss.com/)
- [NgRx](https://ngrx.io/)
- [Jest](https://jestjs.io/)
- [HeroIcons](https://heroicons.com/)
- [ApexCharts](https://apexcharts.com/)

## Prerequisite

- Node (^18.13.0 || ^20.9.0): https://nodejs.org/en
- Docker (optional): https://www.docker.com/

## Start Development

#### Clone the project (note: use **git bash** to run this command)

`git clone https://github.com/iEnzymes/ahavah-affiliate.git && cd ./ahavah-affiliate`

#### Install dependencies

`npm install`

#### Running the server

`npm run dev`

## Checklist

- [ ] Create a new blank project on GitLab.
- [ ] Set up remote URLs using the script: `. ./scripts/setup-remote.sh`.
- [ ] Rename the project using the script: `. ./scripts/rename-project.sh`.
- [ ] Clean up `README.md` and provide clear project instructions.
- [ ] Start coding.

## Docker (Optional)

#### Create an image

`docker build -t ahavah-affiliate -f ./dockerfiles/Dockerfile.local .`

#### Run the service

- Git Bash

  `docker run -dp 80:80 --restart always --name client-service -v $(pwd -W):/usr/src/app ahavah-affiliate`

- Linux

  `docker run -dp 80:80 --restart always --name client-service -v $(pwd):/usr/src/app ahavah-affiliate`

- Powershell

  `docker run -dp 80:80 --restart always --name client-service -v ${pwd}:/usr/src/app ahavah-affiliate`

## Commands

| Command         | Description                                              | npm                     |
| --------------- | -------------------------------------------------------- | ----------------------- |
| `dev`           | Starts the development server                            | `npm run dev`           |
| `build`         | Builds the production code                               | `npm run build`         |
| `watch`         | Builds the production code and watches for changes       | `npm run watch`         |
| `lint`          | Runs the linter                                          | `npm run lint`          |
| `lint:fix`      | Runs the linter and fixes any linting errors             | `npm run lint:fix`      |
| `stylelint`     | Runs the style linter                                    | `npm run stylelint`     |
| `stylelint:fix` | Runs the style linter and fixes any style linting errors | `npm run stylelint:fix` |

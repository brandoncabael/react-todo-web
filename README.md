React front-end to communicate with Rails API @ https://github.com/brandoncabael/rails-todo-api

## Table of Contents
- [Installation Non Docker](#installation-non-docker)
- [Installation Docker](#installation-docker)
- [Interaction](#interaction)

## Installation Non Docker
Ensure Rails Todo API is installed first
https://github.com/brandoncabael/rails-todo-api

Clone the repository to local folder
`git clone https://github.com/brandoncabael/react-todo-web.git`

Cd into directory
`cd /react-todo-web`

Run npm install
`npm install`

Start development Server
`npm start`

Navigate to hosted URL
`http://localhost:5000`

## Installation Docker
Ensure Rails Todo API-Docker is installed first
https://github.com/brandoncabael/rails-todo-api

Clone the repository to local folder
`git clone https://github.com/brandoncabael/react-todo-web.git`

Cd into directory
`cd /react-todo-web`

Git checkout `dockerize` branch
`git checkout dockerize`

Run docker build
`docker build -t todo-web .`

Run the docker container
`docker run -it -v ${PWD}:/app -p 5000:5000 --rm todo-web`

Navigate to hosted URL
`http://localhost:5000`

## Interaction
Once navigated to URL `http://localhost:5000` click signup link to signup new user

Proceed to Signin page to signin using newly created credentials

Click Todos link to view existing Projects and todos, update done status, or delete Todos or Items!



# Fylz Internship Challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installing NPM packages 

 - [npx create-react-app *app-name*](https://create-react-app.dev/)
 - [cd *app-name*](https://create-react-app.dev/)
 - [npm start](https://create-react-app.dev/)
 - ### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Installing Aditional Dependecies

- Font-awesome -- For Icons
npm i --save @fortawesome/fontawesome-svg-core

- Bootstrap -- For Styling the Page
npm install react-bootstrap bootstrap
- Axios -- For Fetching the Api 
npm install axios
- React-Router-Dom -- For Switching the webpages 
npm install react-router-dom
- Material-UI -- Forcomponent Libraries
npm i @material-ui/core

## Create different types of Components

where `user.js` consists of users data which is displayed on the frontend.

The time working with the API to retrive data the  `Loading.js` takes place .

The repositories consists the data being saved by the user in a particular github where it can be retrived by calling it User name (githubAPI) `repository.js` displayed on the frontend.

https://api.github.com/users/

The `pagination.js` is located at the bottom of the page where the page consists of 10 repositories per page.Through pagination the user can able to acess the second page which consists of another 10 repositories.

`npm i react-js-pagination`
## Front-End 
From the above steps we know that the Bootstrap is already installed so importing the Bootstrap & by using various styling `css` the the page is get represented. 
## Loading 
The main purpoe of the `Loading.js` is used to showcase the `gif` when the data get fetched from the `github api`.
## Prompt
The prompt is provided to search a particular user github profile by using he/she's `username`.



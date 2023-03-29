# Avatar Picker
A dummy User Profile app where the user picks a custom Avatar / Unique Picture that they can see when they login

This repo is based on create react app / redux-typescript-mui for ease of development.
```
yarn create react-app . --template redux-typescript-mui
```
## Usage
To get started, do the following:
```
npm install
npm start
```

The development server will start on port 3000.

## Running tests
To run the tests type
```
npm test
```

## Running integration tests 
![Cypress](/public/screenshot.png "Cypress CI/CD")

```
npm start
npx cypress start
```

There is a sample test to show filling out the form.

Initial Setup:
--------------
The following commands were used to seed this project:
```
npx create-react-app . --template redux-typescript
yarn add @mui/material @mui/styled-engine-sc styled-components
yarn add @fontsource/roboto
yarn add @mui/icons-material
yarn add cypress
yarn add unsplash-react
yarn add react-hook-form react-hook-form-mui
yarn add @mui/x-date-pickers @mui/icons-material
```

Project Requirements:
---------------------

• Allow the user to enter their Name, Surname, and a Preferred Topic. Possible values for the topic are: Travel, Cars, Wildlife, Technology and Other. 

• When ‘Other’ is selected as a topic, allow the user to enter their preferred topic in free text. 

• Once the topic has been specified, fetch a matching image from Unsplash.com. You can use any free / opensource package or an API; for example: https://www.npmjs.com/package/unsplash-react 

• Present the image to the user on a new view along with two buttons Accept and Reject. 

• If the user rejects the picture, carry out another search. 

• If the user accepts the picture, present them with a new view with a "card" displaying Name, Surname and a thumbnail of the image selected. 

Further Notes:
- No server side code
- Simple styling / standard user-experience design guidelines
- Use state management system
- Identify what design patterns are used

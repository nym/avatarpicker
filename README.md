# Avatar Picker
A dummy User Profile app where the user picks a custom Avatar / Unique Picture that they can see when they login

This repo is based on create react app / redux-typescript-mui for ease of development.
```
yarn create react-app . --template redux-typescript-mui
```
## Usage
To get started, do the following:
```
yarn install
yarn start
```

The development server will start on port 3000.

## Running tests
To run the tests type
```
yarn test
```

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

Sample CI tests:
“View Edit your Profile Page”
"Fill out profile page with topic `Wildlife` and accept photo”
"Fill out profile page and topic `Cars` reject photo then accept next"
“Submit form with 'Other' and a freeform text query for a topic"



---------


## TODO:
[X] Build out first view with cra, that is the form route for /edit
[ ] Add in test for /edit
[X] Create Picture Picker component
[X] Setup state for saving data based on dummy data spec
[X] Setup helpers for unsplash-react
[X] Create view for seeing the profile in view mode, with an edit button so it’s easy to switch between
[X] Run pretify against code
[ ] Add tests for view mode
[ ] Get Picture Picker working with dummy data in cypress
[ ] Add in test for /edit

### Planned Features:
[X] Form with Name Input, Surname Input, and Preferred Topic
[X] Preferred Topic Dropdown Component
[X] Image Viewer & Accept/Reject Component
[x] SetupProfileForm Component
[X] Profile Component
[X] CRUD State management for user 
[X] Unsplash Helpers with unsplash-react 

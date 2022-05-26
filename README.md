# ABC-BOOK
Note: Default README.md is within the abc-book folder. Quick summary to start running the project:
After cloning the project,  `yarn i` to install all dependencies.
Then `yarn start` to run the project on your localhost.


## Redux 

Assumption: nodejs is already installed.
Since we are using typeScript for this project. To start off, we install redux.

    yarn add @types/react-redux

We are also using react-toolkit for more efficient redux development

    yarn add @reduxjs/toolkit

Redux focus codes such as the reducers, actions can be found at **src/store**. 

### Redux Design 
3 main reducers - authentication related(**src/store/login.ts**), user related(**src/store/user.ts**) and book related(**src/store/book.ts**).

I approached in this way so that I will be able to access for example if user is authenticated throughout the application by `useAppSelector()`.

## Project Files Structure

Routed Pages/component are stored together in **src/pages**
Child Component of pages are stored at **src/components**
Custom hooks are stored at  **src/hooks**
Redux related are stored at **src/store**
Custom component and service are stored at **src/services**

I approached in this method where files are store based on their functionality. Making it easy to figure out where the codes are as the projects get bigger. 

## Code Implementation

All requirements should be working except for table sorting, filtering and pagination (**only sorting for user table column user is working(clicked on username)**)

Custom hooks are uses for login form validation and add/editing table contents
Notes that sessionStorage/localStorage was not use, so refreshing will remove all edits

List of users:

 role:admin ( email:adminjack@email.com  , password: password)
 role:editor (email:editormary@email.com , password: password)
role:member(email:memberjack@email.com, password:password)

All routes are  protected except for `path='/'`



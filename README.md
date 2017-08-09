# week-5-ad-hoc
ad-hoc week 5 project

### User story
as a user


### Specification

- [x] Use at least 1 API
- [x] Make your API calls from the back-end using the Request module (or one you build yourself)
- [x] Your server should contain a minimum of 2 routes
- [x] We expect back-end testing using tape (test as many components as you can) and basic front-end testing.
- [x] Test your server by injecting fake HTTP requests using Shot.
- [x] Host your project on heroku, see resources
- [x] Use module.exports and require to break a single large server file into smaller modules.
- [x] Consider a good server file structure based on what we have discussed over the week.
- [x] Employ continuous integration on your project with Travis or a similar tool.
- [x] Use CodeCov or a similar tool for test coverage.
- [x] Display continuous integration and code coverage badges on your project README.
- [x] Ensure that errors are handled, if for example a user attempts to make a request to a non-existent route to your server, provide the user with a custom response.



## Stretch Goal




### Tech Stack

- Code coverage: Istanbul and CodeCov.io
- Continuous integration: Travis CI
- Automatic deployment: Heroku
- Server: http
- Testing: tape
- Server testing: shot


### Day 1

- Discuss app purpose and architecture
- Create initial folder structure and files
- Set up server, Travis and initial tests using tape and shot

### Day 2

- Enable back-end to pass relevant data to the front-end
- Add more specific back-end tests
- Add styling and DOM manipulation to display data
- Set up Heroku



### Heroku

Things to remember for next time!

- Make sure that `port` is declared in `server.js` as below, in order for successful deployment on Heroku. Heroku needs `process.env.PORT`, as it won't recognise `4000`.

  `var port = process.env.PORT || 4000;`

- Ensure that there is a `start` script in package.json, as below.

```  
"scripts": {
    "start": "node src/server.js"
  }
```



### Installation instructions

 - Clone this repo and cd into it

 - `git clone git@github.com:FACG2/week-5-ad-hoc.git`

 - Run `npm install` to install all dependencies

 - Run `npm start` to start the server

 - Run `npm test` to start testing

 - Navigate to http://localhost:4000/ in your browser

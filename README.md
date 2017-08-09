# week-5-ad-hoc
Our website can give you a best qoute, and funny photo for the author

### User story
> As a user
- When I click on refresh button I should get a Random Qoute.
- When click on "Read Qoute" Button I should hear the speech of the Qoute.
- When I click on "Tweet" Button I can share the Qoute on tweeter.



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


### System Structure
![pic](https://github.com/FACG2/week-5-ad-hoc/blob/master/public/img/structure.png?raw=true)

### Sequence Diagram
![pic2](https://github.com/FACG2/week-5-ad-hoc/blob/master/public/img/sequance.png?raw=true)

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

### [Elias](http://github.com/eliascodes) Avatar
![elias photo](http://api.adorable.io/avatar/200/elias)

### Installation instructions

 - Clone this repo and cd into it

 - `git clone git@github.com:FACG2/week-5-ad-hoc.git`

 - Run `npm install` to install all dependencies

 - Run `npm start` to start the server

 - Run `npm test` to start testing

 - Navigate to http://localhost:4000/ in your browser


### Team:

* [Sohad](http://github.com/Sohadwd)<br>

![Sohad](http://api.adorable.io/avatar/128/sohad)

* [Qamer](http://github.com/Qamar-93)<br>

![Qamer](http://api.adorable.io/avatar/128/qamer)

* [Eslam](http://github.com/Eslam3bed)<br>

![Eslam](http://api.adorable.io/avatar/128/eslam)

* [Mahmoud](http://github.com/mrm7moud)<br>

![Mahmoud](http://api.adorable.io/avatar/128/mahmoud)

## Video App
- By Shane Fry
- This is a video app that serves up all of the audio / video associated with a default category, loads and plays a default selection. It also filters through categories and display all of the selections available (load and play a default for each), clicking on a thumbnail loads and plays that video and shows its details - for example its rating, reviews / starred reviews, social media icons (non-functional for now).

## Getting Started
- These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.
- You'll need to change the settings in config.js to point to your database, if using mac change port to 8889, and insert a password to your database.
- Git clone to the directory of your choice, cd into the project folder and NPM install. Run npm start and navigate to

```
localhost:3000
```

## Prerequisites - Node, Express, SQL and live data

- Embedded JavaScript templates.
```
npm install --save ejs
```

- This view engine uses sane defaults that leverage the "Express-way" of structuring an app's views.
```
npm install --save express-handlebars
```

- Use mySQL to pull from database
```
npm install --save mysql
```


## Installing

- Please follow the commands and downloads listen to get the application running!

- Atom: https://atom.io/
- MAMP: https://www.mamp.info/en/


## Deployment
- Can use either Mamp/Wamp, or local host through using a port and express to direct to new view page
- In my case run localhost:3000 and your project will be live
```
npm start or node app
```

## Running the tests
- W3C Markup Validation
    - Built into Atom
        - Atom automatically checks for W3C markup validation.
    - External: https://validator.w3.org/#validate_by_input
        - All codes must go through the validator
    - CSS: http://www.css-validator.org/
        - All codes must go through the validator
    - Preview chrome / console


## Built with
- Atom - Generated HTML5, CSS, Javascript
- MAMP - SQL & Databasing
- Dreamweaver - Generated HTML5, CSS, Javascript
- Cinema 4D - Graphics and designs
- SASS: CSS Designer & Codewriter
 - http://sass-lang.com/
- Grunt: Javascript Task Runner
 - https://github.com/gruntjs/grunt
- Node: Javascript Runtime built on Chrome's V8 Javascript Engine
 - https://nodejs.org/en/

## Authors
- Shane Fry

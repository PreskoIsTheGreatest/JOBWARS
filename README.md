# JOBWARS

  This repository is a job platform, where the user puts it's skills and a company posts job with their required
  skills and the program creates matchmaking between them. 
  
  I have won three business competitions with that project.
  
  The app is written in Node.js with Express, PostgreSQL, Knex and Bookshelf, Passport, Angular2-Beta, Boostrap.
  
  It is deployed in Heroku:
  [JobWars](https://jobwars.herokuapp.com)
  
  Before you run it, you have to add connection.js file, where you create instances of knex and bookshelf
  with you db configuration.
  
  Then, you must run:
  
  ```
    npm install
    
    npm run tsc
    
    node index.js
  ```
  
  Where npm run tsc, compiles the angular2 typescript files.
  


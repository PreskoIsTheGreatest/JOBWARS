# JOBWARS

##Summary
  This repository is a job platform, where the user puts it's skills and a company posts job with their required
  skills and the program creates matchmaking between them. 
  
  I have won three business competitions with that project.
  
  It is deployed in Heroku:
  [JobWars](https://jobwars.herokuapp.com)
  
##Functional 
  
  The project currently has:
  
###Entry Page
  
* Login
* Register Company/JobSeeker
  
###Company Page
* Load Company JobPosts
* Create JobPosts
* View Applied candidates for a jobpost
* Edit Company Profile
* Logout
   
###JobSeeker Page
* Load JobPosts which match the current JobSeeker skills
* Load JobPosts, which the current JobSeeker has applied
* Edit JobSeeker Profile
* Logout

##Technology
  The app is written in Node.js with 

* Express for http 	queries 
* PostgreSQL for database 
* Knex for connection to the database
* Bookshelf as a ORM to the database
* Passport for authentication
* Angular2-Beta as a frontend framework
* Boostrap for purpose of style.
* Mocha and supertest for testing
* Bcrypt for crypting and decrypting the passwords
  
##Deployment

  Before you run it, you have to add connection.js file, where you create instances of knex and bookshelf
  with you db configuration.
  
  Then, you must run:
  
  ```
    npm install
    
    npm run tsc
    
    npm run test
    
    node index.js
  ```
  
  Where npm run tsc, compiles the angular2 typescript files and
  npm run tests run mocha tests
  


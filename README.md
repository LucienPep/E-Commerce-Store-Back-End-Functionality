# Homework-Week-13
## E-Commerce-Store-Back-End-Functionality

My Your task was to build the back end for an e-commerce site by modifying starter code.

### User Story
```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

### Table of Contents
1. [Acceptance Criteria](#acceptance-criteria)
2. [Work Description](#work-description)
3. [Tutorial Link](#link-to-video)
4. [Screenshot](#screenshot)
5. [Installation](#installation)
6. [Usage](#usage)
7. [License](#license)
8. [Questions](#questions)

### Acceptance Criteria
```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

---
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### Work Description
I started by creating the models used for the databases that SQL will use. I then made teh associations for the files and their foreign keys, I also added a method onDelete CASCADE to the catagories relation to products. I then completed all the routes for Product, Category and Tag for GET, GET by id, POST, PUT and DELETE. Next I added my password into the .env file and updated the database using the SQL shell. I synced sequelize to the database and seeded the data required from the provided files from there I was able to run the server and test API calling through Heroku. I had a few bugs to fix with my calls which came down to a few minor syntax errors which were easy to fix. After fixing said errors all calls for each model works as intended.

### Link To Video

Link For Tutorial Video<br>[Week-13-Assignment-Video](https://drive.google.com/file/d/1Z4qAdm9tQCNsOz6W8Y3k_VoSGsFgcEjI/view?usp=share_link)

### Screenshot

![Online Notepad](./assets/Screenshot13.png)
 
### Installation

For this application express, sequelize, dotenv and mysql2 need to be installed. This can be done using npm install in console.

### Usage

express is used as the call location for our server calls and routing. Mysql2 is used to add and retrieve data from sql files and utilise sql queries and the database. Sequelize was used to construct models that the database data will insert into and function with one another as requested. Dotenv was used to store password and username where they can't be accessed remotely.

### License

The license I am using for my project is<br>[MIT](https://opensource.org/licenses/MIT)

### Questions

GitHub: [Lucienpep](https://github.com/Lucienpep)<br>

For any further questions contact me via:

Email: <xxyyzzoozz@gmail.com>

---
Lucien Haines UADL 2023
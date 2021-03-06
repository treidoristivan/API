<h1 align="center">API - Food Delivery App RESTfull API</h1>



API is a Food Delivery RESTful API. Built with NodeJs using the ExpressJs Framework.
Express.js is a web application framework for Node.js. [More about Express](https://en.wikipedia.org/wiki/Express.js)
## Built With
[![Express.js](https://img.shields.io/badge/Express.js-4.x-orange.svg?style=rounded-square)](https://expressjs.com/en/starter/installing.html)
[![Node.js](https://img.shields.io/badge/Node.js-v.12.14-green.svg?style=rounded-square)](https://nodejs.org/)

## Requirements
1. <a href="https://nodejs.org/en/download/">Node JS</a>
2. <a href="https://www.getpostman.com/">Postman</a> 
3. Web Server (ex. localhost)

## How to run the app ?
1. Clone this repository to your local directory (e.g: ~/dev/javascript/API)
2. Open the directory in CMD or Terminal
3. Type `npm install`
4. Make new file a called **.env**, set up first [here](#set-up-env-file)
5. Turn on Web Server and MySQL (can using Third-party tool like xampp, etc.)
6. Create a database with the name **dbmaster**, and Import file [dbmaster.sql](dbmaster.sql) to **phpmyadmin** or simply use [knex](#knexjs)
7. Open Postman (or Insomnia) desktop application or Chrome web app extension that has installed before
8. Choose HTTP Method and enter request url.(ex. localhost:4040/item)
9. You can see all the end point [here](#end-point), some end point require specific user privileges to be able to access the data. read the [Usage](#usage)

## Set up .env file
Open .env file on your favorite code editor, and copy paste this code below :
```
APP_PORT=3000
APP_URI=http://localhost:3000/
APP_KEY=cobaajadulu

DB_SERVER=localhost
DB_USER=root
DB_PASS=
DB_DATABASE=dbmaster

REDIS_HOST=127.0.0.1
REDIS_PORT=6379
```

## Knex.js
Knex.js is a "batteries included" SQL query builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon Redshift designed to be flexible, portable, and fun to use. It features both traditional node style callbacks as well as a promise interface for cleaner async flow control, a stream interface, full featured query and schema builders, transaction support (with savepoints), connection pooling and standardized responses between different query clients and dialects.

Open the directory on Terminal and Type commands below :
```
$ node_modules/.bin/knex migrate:latest
$ node_modules/.bin/knex seed:run
```

## Usage

### Testing Account
Some of the end point require user(s) to have a spesific user privileges (e.g: administrator) to access the data. The user privileges are stored in the request headers using <a href="https://jwt.io/">JSON Web Token</a>.

<details><summary><b>Show instructions</b></summary>

1. Open **phpmyadmin** or any other DBMS
2. Open **dbmaster** database and access **users** table
3. Choose a Record and copy the **username** based on the **roles_id**
    * 1 = "Administrator"
    * 2 = "Restaurant"
    * 3 = "Customer"
4. Open Postman (or Insomnia), Access the **login** end point [here](#end-point)
5. On the formdata, fill username key with the copied username and password key with **"password"**
6. Copy the token from the HTTP Request response to access the end point

</details>

## End Point
**1. GET**
* `/`
* `/user`
* `/user/:id`
* `/logout`
* `/category`
* `/category/:id`
* `/restaurant`
* `/restaurant/:id` (Get Restaurant by ID)
* `/item`
* `/item/:id` (Get Item by ID)
* `/cart`
* `/profile`
* `/review`
* `/review/:id` (Item ID)


**2. POST**
* `/register`
    * ``` { "name": "John Doe", "username": "john_doe", "password": "s3cr3t_k3y" } ```

* `/login`
    * ``` { "username": "john_doe", "password": "s3cr3t_k3y" } ```

* `/user`
    * ``` { "name": "John Doe", "username": "john_doe", "password": "s3cr3t_k3y", "role_id": 1 } ```

* `/category`
    * ``` { "name": "Cake", "icon": "img-asdkjh.jpg" } ```

* `/restaurant`
    * ``` { "name": "Joe's Pizza", "logo": "img.png", "longitude": -120.01280, "latitude": 11.109129, "description": "Lorem Ipsum Dolor Sit Amet", "user_id": 3 } ```

* `/item`
    * ``` { "name": "Macaronni and Cheese Pizza", "price": 12000 , "description": "Lorem Ipsum Dolor Sit Amet", "images": ArrayofObject, "category": 1,2,3, "restaurant_id": 1 } ```

* `/review`
    * ``` { "rating": 4, "review": "Lorem Ipsum.", "item_id": 4 } ```

* `/cart`
    * ``` { "item_id": 1, "quantity": 3, "description": "Lorem Ipsum." } ```

* `/password`
    * ``` { "username": "Mona_Weber", "email": "email@gmail.com" } ```

* `/token/check`
    * ``` { "token": "blablabla" } ```

* `/restaurant/register`
    * ``` { "name": "blablabla", "email": "email@gmail.com", "username": "bla_bla", "password": "password", "restaurant_name": "resto_name" } ```

**3. PATCH**
* `/user/:id` (Update User by id)
   * ``` { "name": "John Doe", "username": "john_doe", "password": "s3cr3t_k3y", "role_id": 1 } ```

* `/category/:id` (Update Category by id)
   * ``` { "name": "Category8", "icon": "img.jpg" } ```

* `/restaurant/:id` (Update Restaurant by id)
   * ``` { "name": "Joe's Pizza", "logo": "img.png", "longitude": -120.01280, "latitude": 11.109129, "description": "Lorem Ipsum Dolor Sit Amet", "user_id": 3 } ```

* `/item/:id` (Update Item by id)
   * ``` { "name": "Macaronni and Cheese Pizza", "price": 12000 , "description": "Lorem Ipsum Dolor Sit Amet", "category": 1,2,3, "images": ArrayOfObject } ```

* `/review/:id` (Update Review by id)
   * ``` { "rating": 4, "review": "Lorem Ipsum." } ```

* `/cart/:id` (Update Cart by id)
   * ``` { "quantity": 3, "description": "Lorem Ipsum." } ```

* `/password/reset`
   * ``` { "password": ****** } ```

* `/restaurant/approve/:id`

**4. DELETE**
* `/user/:id` (Delete User by id)
* `/category/:id` (Delete Category by id)
* `/restaurant/:id` (Delete Restaurant by id)
* `/item/:id` (Delete Item by id)
* `/review/:id` (Delete Review by id)
* `/cart/:id` (Delete Cart by id)

# Backend Application for Product Site using NodeJs

This is a Backend Application API example based on Nodejs,ExpressJs and MongoDB, following the **MVC pattern** i.e. Model ~~View~~ Controller.

**Mongoose** is used for Database transactions which is an elegant solution to mongodb object modeling for NodeJs.

This repository contains a NodeJs application that implements Rest APis for Products using MongoDB Atlas.

It Containes two entities : User and Prodcts

## Description

## To start setting up the project

Step 1: Clone the repo

```bash
git clone https://github.com/singhsharad529/eminenceinnovation-backend
```

Step 2: cd into the cloned repo and run:

```bash
npm install
```

Step 3: Put your credentials in the .env file.

```bash
PORT=5000
MONGO_URI=ADD YOUR JWT SECRET
NODE_ENV=development or production
JWT_SECRET=sADD YOUR JWT SECRET
```

## Installation

```bash
$ npm install

```

## Running the app

```bash
# development
$ npm start

```

## Available API Endpoints For Users:

**After Signup or Login it will generate a token value which you have to send in Authorization header everytime to access other endpoints**

```bash
# Register with Username,Password( POST request )

$ http://localhost:5000/api/users

{
	"username":"dymmyUsername@gmail.com",
    "password":"dummypassword"
}

# Login with Username,Password( POST request )

$ http://localhost:3000/auth/login

{
    "username":"dymmyUsername@gmail.com",
    "password":"dummypassword"
}

```

## Available API Endpoints For Products:

**Only a Authenticated user can get and create a product, so it will require Authorization Header with Bearer token**
**Eg. Authorization : Bearer <Token_Value>**

```bash
# Get all Products ( GET request )

$ http://localhost:5000/api/products/

# Get all products by category : smartphones and laptops ( GET request )

$ http://localhost:5000/api/products/search?category=smartphones

# Create a product( POST request )

$ http://localhost:5000/api/products/create

{
    "title": "perfume Oil",
    "description": "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
    "price": 13,
    "discountPercentage": 8.4,
    "rating": 4.26,
    "stock": 65,
    "brand": "Impression of Acqua Di Gio",
    "category": "fragrances",
    "thumbnail": "https://i.dummyjson.com/data/products/11/thumbnail.jpg"
}

```

**For each endpoints you should add Bearer Token inside Authorization header**

## Author

- [**Sharad Kumar Singh**](https://singhsharad529.github.io/sharad-portfolio/)

```

```

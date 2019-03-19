# e-commerce
A simple blogging web-app made with vue

## Server API Routes

### Authentication Routes

| Route | HTTP | Header | Body| Description | 
| ----- |:----:|--------|-----| :---------- |
| ```/user/signup``` | **POST** |none  | name:string, username:string, email:string, password:string | Create user and generate token   | 
| ```/user/signin```| **POST** | none | email:string, pasword: string | authenticate registered user and generate token |
| ```/user/Gsignin```| **POST** | none | token: string | authenticate registered user and generate token |

### User CRUD Routes

| Route | HTTP | Header | Body| Description | 
| ----- |:----:|--------|-----| :---------- |
| ```/user/updateuser/:token``` | **PUT** |token  | email:string, password:string |Update a user's attributes (admin only)   |
| ```/user/deleteuser/:token``` | **DELETE** |token  | none |delete a user (admin and authenticated user only)   |

### product CRUD Routes

| Route | HTTP | Header | Body| Description | 
|:-----:|:----:|:------:|:---:|:----------:|
| ```/product/list``` | **GET** | none | none | get all product from all user | 
| ```/product/list/:id``` | **GET** | token | none | Get a product's info (admin and authenticated user only) |
| ```/product/add``` | **POST** | token | product:string, description:string, tag:string | create product by user   | 
| ```/product/update/:id``` | **GET** | token | product_Id | getting product to update |
| ```/product/update/:id``` | **PUT** | token | product_id:string, product:string, description:string, tag:string | update and save product to database |
| ```/product/delete/:id``` | **DELETE** |token | product id:string |  delete product from database |

### Customer Cart routes

| Route | HTTP | Header | Body| Description | 
| ----- |:----:|--------|-----| :---------- |
| ```/cart```|**GET**| token | none | see cart by customer order |
| ```/cart/:id```|**POST**| token | product id:string,quantity:number | adding product order by customer |
| ```/cart/:id```|**DELETE**| token | product id:string | delete product order by customer |
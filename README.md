# e-commerce
A kopilopi web-app made with vue

## Server API Routes

### Authentication Routes

| Route | HTTP | Header | Body| Description | 
| ----- |:----:|--------|-----| :---------- |
| ```/user/signup``` | **POST** |none  | name:string, address:string, username:string, email:string, password:string | Create user and generate token | 
| ```/user/signup/:specialkey``` | **POST** |none  | name:string, address:string, username:string, email:string, password:string | Create user and generate token  (admin have special key to generate when signup) | 
| ```/user/signin```| **POST** | none | email:string, pasword: string | authenticate registered user and generate token |
| ```/user/Gsignin```| **POST** | none | token: string | authenticate registered user and generate token |

### User CRUD Routes

| Route | HTTP | Header | Body| Description | 
| ----- |:----:|--------|-----| :---------- |
| ```/user/updateuser``` | **PUT** |token  | name:string, address:string, username:string, password:string |Update a user's attributes (admin only)   |
| ```/user/deleteuser``` | **DELETE** |token  | none |delete a user (admin and authenticated user only)   |

### product CRUD Routes

| Route | HTTP | Header | Body| Description | 
|:-----:|:----:|:------:|:---:|:----------:|
| ```/product/list``` | **GET** | none | none | get all product from all user | 
| ```/product/search``` | **GET** | none | keyword | Get a product's info  |
| ```/product/add``` | **POST** | token | name:string, description:string, price:string, tag:string | create product by user (Admin preferences)  | 
| ```/product/update/:id``` | **PUT** | token | product_id:string, name:string, description:string, price:string, tag:string | update and save product to database (Admin preferences)|
| ```/product/delete/:id``` | **DELETE** |token | product id:string |  delete product from database (Admin preferences)|

### Customer Cart routes

| Route | HTTP | Header | Body| Description | 
| ----- |:----:|--------|-----| :---------- |
| ```/cart```|**GET**| token | none | see customer order by user and admin only |
| ```/cart/:id```|**POST**| token | product id:string, quantity:number | adding product order to cart by customer |
| ```/cart/:id```|**PUT**| token | product id:string, quantity:number | updating product order to cart by customer |
| ```/cart/:id```|**DELETE**| token | product id:string | delete product order by customer |
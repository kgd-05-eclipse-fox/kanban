# Kaban Board

**POST REGISTER**
----
* **URL**

  /register

* **Method:**
  
  <_The request type_>

  `POST` 

* **Data Params**

  **Required:**

    ```json
    body = { "email": "[string]", "password": "[string]"}
    
* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```json 
    {
    "id": 1,
    "username": "jeplindm",
    "email": "forexample@mail.co.id",
    "createdAt": "2020-11-04T09:51:14.232Z",
    "updatedAt": "2020-11-04T09:51:14.232Z"
    }
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ```json

    { "msg": "Password minimun is 6 characters,Please fill with your email,Please write in format email,Please fill with your password,Please fill your username" }
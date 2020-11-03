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
    "email": "example@mail.com",
    "createdAt": "2020-11-03T19:31:50.930Z",
    "updatedAt": "2020-11-03T19:31:50.930Z"
    } 
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ```json

    {  "msg": "Password minimun is 6 characters,Please fill with your email,Please write in format email,Please fill with your password" }
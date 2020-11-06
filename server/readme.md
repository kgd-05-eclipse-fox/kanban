# Kaban Board

URL : https://qanban.web.app/

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

**POST LOGIN**
----
* **URL**

  /login

* **Method:**
  
  <_The request type_>

  `POST` 

* **Data Params**

  **Required:**

    ```json
    body = { "email": "[string]", "password": "[string]"}
    
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json 
    {"access_token": "[string]"}
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "msg": "Invalid email/password"}

**POST GOOGLE LOGIN**
----
* **URL**

  /googleLogin

* **Method:**
  
  <_The request type_>

  `POST` 

   
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json 
    {"access_token": "[string]"}
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "msg": "Invalid email/password"}

**Fetch All Tasks**
----
  return all available tasks on server

* **URL**

  /tasks

* **Method:**
  
  `GET` 

* **Data Params**
  **Required:**
  ```json
  "headers" : {
    "token": "[string]"
  }
  
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    [
      {
        "id": 1,
        "title": "Belajar menggambar",
        "description": "Menggambar hiu",
        "category": "backlog",
        "UserId": 1,
        "username": "jeplindm",
        "createdAt": "2020-11-05T03:49:42.666Z",
        "updatedAt": "2020-11-05T03:49:42.666Z"
      },
      {
        "id": 2,
        "title": "Belajar menggambar",
        "description": "Menggambar gunung",
        "category": "backlog",
        "UserId": 1,
        "username": "jeplindm",
        "createdAt": "2020-11-05T03:52:31.086Z",
        "updatedAt": "2020-11-05T03:52:31.086Z"
      },
      {
        "id": 6,
        "title": "Belajar menggambar",
        "description": "Menggambar ikan paus",
        "category": "doing",
        "UserId": 2,
        "username": "abrar",
        "createdAt": "2020-11-05T17:49:31.039Z",
        "updatedAt": "2020-11-05T17:49:54.643Z"
      }
  ]
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "msg": "Authentication failed"}


**POST TASK**
----
* **URL**

  /tasks

* **Method:**
  
  `POST` 

* **Data**
  **Required:**
  ```json
  "headers" : { "token" : "string" }

  "body" : { "title": "[string]","description": "[string]"} 

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```json 
    {
    "id": 28,
    "title": "Belajar berenang",
    "description": "Berenang di laut",
    "username": "jeplindm",
    "UserId": 1,
    "updatedAt": "2020-11-06T14:31:26.153Z",
    "createdAt": "2020-11-06T14:31:26.153Z",
    "category": "backlog"
    }   
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ```json
    { "msg": "Please fill the title,Please fill the description" }

**Update Todos**
----
  return the newest data that just been updated

* **URL**

  /tasks/:id

* **Method:**
  
  `PUT` 
  
   **Required:**
 
   `id=[integer]`

*  **Data Params**

   **Required:**
   ```json
   "headers" : { "token" : "string" }
   
   "body" : {"title": "string", "description": "string", "category": "string" }


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
      "id": 1,
      "title": "Menulis",
      "description": "Menulis buku",
      "category": "doing",
      "UserId": 1,
      "username": "jeplindm",
      "createdAt": "2020-11-05T03:49:42.666Z",
      "updatedAt": "2020-11-06T14:38:07.380Z"
    }
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ "msg": "Please fill the title,Please fill the description,Please fill the category" }`

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ "msg": "Authentication failed" }`

**Patch Task**
----
  return the newest data that just been updated

* **URL**

  /tasks/:id

* **Method:**

  `PATCH` 
  
   **Required:**
 
   `id=[integer]`

*  **Data Params**

   **Required:**
   ```json

    "headers" : { "token" : "string" }

    "body" : {"category": "string" }

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
      "id": 11,
      "title": "Belajar berenang",
      "description": "Berenang di laut",
      "category": "done",
      "UserId": 1,
      "username": "jeplindm",
      "createdAt": "2020-11-05T17:59:36.071Z",
      "updatedAt": "2020-11-06T14:42:42.206Z"
    }
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERRORS <br />
    **Content:** `{error: Internal server errors}`

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ "msg": "Please fill the category" }`

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ "msg": "Authentication failed" }`

**Delete Task**
----
* **URL**

  /tasks/:id

* **Method:**

  `DELETE` 
  
*  **URL Params**

  **Required:**
 
  `id=[integer]`

  ```json
  headers: { "token" : "string" }
  
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    "message: Task has been deleted"
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERRORS <br />
    **Content:** `{error: Internal server errors}`

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ "msg": "Task is not found" }`

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ "msg": "Not Authorized" }`





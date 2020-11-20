# kanban

https://kanvanapp.web.app/ <br/>
https://kanvan-app.herokuapp.com/


**Register User**
----
  * **URL**

    /users/register

  * **Method:**
    
    `POST`
    
  * **Data Params**

      firstName=[string],

      lastName=[string],

      email=[string],

      password=[string]

  * **Success Response:**  

    * **Code:** 201 CREATED <br />
      **Content:** 
      ```json
      {
          "id": 4,
          "email": "sasuke@mail.com"
      }
      ```
  * **Error Response:**

    * **Code:** 400 BAD REQUEST <br />
      **Content:** 
      ```json
      {
          "errMsg": [
              "First name cannot be empty"
          ]
      }
      ```
    OR
    * **Code:** 400 BAD REQUEST <br />
      **Content:**
      ```json
      {
          "errMsg": [
              "Last name cannot be empty"
          ]
      }
      ```
    OR
    * **Code:** 400 BAD REQUEST <br />
      **Content:**
      ```json
      {
          "errMsg": [
              "Email cannot be empty"
          ]
      }
      ```
    OR
    * **Code:** 400 BAD REQUEST <br />
      **Content:**
      ```json
      {
          "errMsg": [
              "Password cannot be empty"
          ]
      }
      ```
    OR
    * **Code:** 400 BAD REQUEST <br />
      **Content:**
      ```json
      {
        "errMsg": "email must be unique"
      }
      ```
    OR
    * **Code:** 500 INTERNAL SERVER ERROR <br />
      **Content:**
      ```json
      {
        "error": "Internal Server Error"
      }
      ```

  * **Sample Call:**
    ```json
    axios({
        "method": "POST",
        "url": "/users/register",
        "data": {
            "firstName": "payload.firstName",
            "lastName": "payload.lastName",
            "email": "payload.email",
            "password": "payload.password"
        }
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })
    ```
  

**Login User**
----
  * **URL**

    /users/login

  * **Method:**
    
    `POST`
    
  * **Data Params**

      email=[string],

      password=[string]

  * **Success Response:**  

    * **Code:** 200 OK <br />
      **Content:** 
      ```json
      {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJzYXN1a2VAbWFpbC5jb20iLCJpYXQiOjE2MDQ3Mjc0MTZ9.5o6uFugkIcJhh8NpI3NQH2fCUAVJh5bYqe6ngjjvO6g",
        "id": 4
      }
      ```
  * **Error Response:**

    * **Code:** 401 UNAUTHORIZED <br />
      **Content:** 
      ```json
      {
        "errMsg": "Wrong username / password"
      }
      ```
    OR

    * **Code:** 500 INTERNAL SERVER ERROR <br />
      **Content:**
      ```json
      {
        "error": "Internal Server Error"
      }
      ```
  * **Sample Call:**
    ```json
    axios({
        "method": "POST",
        "url": "/users/login",
        "data": {
            "email": "payload.email",
            "password": "payload.password"
        }
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })
    ```

**Fetch All Task**
----
  * **URL**

    /task

  * **Method:**
    
    `GET`

  * **Headers:**

    Required:

    token=[string]

  * **Success Response:**  

    * **Code:** 200 OK <br />
      **Content:** 
      ```json
      [
        {
            "id": 3,
            "title": "React",
            "description": "Explore React",
            "category": "Back Log",
            "UserId": 1,
            "createdAt": "2020-11-06T11:40:47.339Z",
            "updatedAt": "2020-11-06T11:41:10.038Z"
        },
        {
            "id": 1,
            "title": "Express.js",
            "description": "Explore express",
            "category": "Done",
            "UserId": 1,
            "createdAt": "2020-11-06T06:29:23.954Z",
            "updatedAt": "2020-11-06T12:46:19.387Z"
        }
      ]
      ```
  * **Error Response:**
    * **Code:** 500 INTERNAL SERVER ERROR <br />
      **Content:**
      ```json
      {
        "error": "Internal Server Error"
      }
      ```
  * **Sample Call:**
    ```json
    axios({
        "method": "GET",
        "url": "/task",
        "headers": {token}
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })
    ```

**Add Task**
----
  * **URL**

    /task/add

  * **Method:**
    
    `POST`

  * **Headers:**

    Required:

    token=[string]
  
  * **Data Params**

    title=[string],

    description=[string]

  * **Success Response:**  

    * **Code:** 201 CREATED <br />
      **Content:** 
      ```json
      {
        "id": 7,
        "title": "Sequelize",
        "description": "Explore sequelize",
        "UserId": 1,
        "updatedAt": "2020-11-07T07:20:46.387Z",
        "createdAt": "2020-11-07T07:20:46.387Z",
        "category": "Back Log"
      }
      ```
  * **Error Response:**
    * **Code:** 400 BAD REQUEST <br />
      **Content:**
      ```json
      {
        "errMsg": [
            "Description cannot be empty"
        ]
      }
      ```
    * **Code:** 401 UNAUTHORIZED <br />
      **Content:**
      ```json
      "Authentication Failed"
      ```

    * **Code:** 500 INTERNAL SERVER ERROR <br />
      **Content:**
      ```json
      {
        "error": "Internal Server Error"
      }
      ```

  * **Sample Call:**
    ```json
    axios({
        "method": "POST",
        "url": "/task/add",
        "headers": {token},
        "data": {
            "title": "payload.title",
            "description": "payload.description"
        }
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })
    ```

**Edit Task**
----
  * **URL**

    /task/edit

  * **Method:**
    
    `PUT`

  * **Headers:**

    Required:

    token=[string]
  
  * **Data Params**

    id=[number],

    title=[string],

    description=[string]

  * **Success Response:**  

    * **Code:** 200 OK <br />
      **Content:** 
      ```json
      {
        "id": 7,
        "title": "Phyton",
        "description": "Explore phyton",
        "category": "Back Log",
        "UserId": 1,
        "createdAt": "2020-11-07T07:20:46.387Z",
        "updatedAt": "2020-11-07T07:31:01.178Z"
      }
      ```
  * **Error Response:**
    * **Code:** 401 UNAUTHORIZED <br />
      **Content:**
      ```json
      "Authentication Failed"
      ```

    * **Code:** 500 INTERNAL SERVER ERROR <br />
      **Content:**
      ```json
      {
        "error": "Internal Server Error"
      }
      ```
  * **Sample Call:**
    ```json
    axios({
        "method": "PUT",
        "url": "/task/edit",
        "headers": {token},
        "data": {
            "id": "payload.id",
            "title": "payload.title",
            "description": "payload.description"
        }
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })
    ```

**Delete Task**
----
  * **URL**

    /task/delete

  * **Method:**
    
    `DELETE`

  * **Headers:**

    Required:

    token=[string]
  
  * **Data Params**

    id=[number]

  * **Success Response:**  

    * **Code:** 200 OK <br />
      **Content:** 
      ```json
      {
        "message": "To do success delete"
      }
      ```
  * **Error Response:**
    * **Code:** 401 UNAUTHORIZED <br />
      **Content:**
      ```json
      "Authentication Failed"
      ```
    * **Code:** 404 NOT FOUND <br />
      **Content:**
      ```json
      "Data not found"
      ```
    * **Code:** 500 INTERNAL SERVER ERROR <br />
      **Content:**
      ```json
      {
        "error": "Internal Server Error"
      }
      ```
  * **Sample Call:**
    ```json
    axios({
        "method": "DELETE",
        "url": "/task/delete",
        "headers": {token},
        "data": {
            "id": "payload.id"
        }
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })
    ```

**Update Task Category**
----
  * **URL**

    /task/patch

  * **Method:**
    
    `PATCH`

  * **Headers:**

    Required:

    token=[string]
  
  * **Data Params**

    id=[number],
    
    category=[string]

  * **Success Response:**  

    * **Code:** 200 OK <br />
      **Content:** 
      ```json
      {
        "id": 5,
        "title": "Meeting",
        "description": "Meeting Sequelize",
        "category": "To Do",
        "UserId": 1,
        "createdAt": "2020-11-06T12:47:37.144Z",
        "updatedAt": "2020-11-07T07:41:53.901Z"
      }
      ```
  * **Error Response:**
    * **Code:** 401 UNAUTHORIZED <br />
      **Content:**
      ```json
      "Authentication Failed"
      ```
    * **Code:** 404 NOT FOUND <br />
      **Content:**
      ```json
      "Data not found"
      ```
    * **Code:** 500 INTERNAL SERVER ERROR <br />
      **Content:**
      ```json
      {
        "error": "Internal Server Error"
      }
      ```
  * **Sample Call:**
    ```json
    axios({
        "method": "PATCH",
        "url": "/task/patch",
        "headers": {token},
        "data": {
            "id": "payload.id",
            "category": "newCategory"
        }
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })
    ```
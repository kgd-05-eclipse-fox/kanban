# Kanban
### client demo: https://k-a-n-b-a-n.web.app
### server link: https://k-a-n-b-a-n.herokuapp.com

**Show All Kanban**
----

* **URL**

  /task

* **Method:**

  `GET`
  
*  **URL Params**

   <_None_> 

* **Data Params**

  <_None_> 

* **Success Response:**

  * **Code:** 200 **OK**<br />
    **Content:** 
    ```json
    [
      {
          "id": 5,
          "title": "1234",
          "description": "ok",
          "category": "done",
          "UserId": 1,
          "createdAt": "2020-11-04T16:00:00.000Z",
          "updatedAt": "2020-11-07T14:59:57.818Z",
      },
      {
          "id": 6,
          "title": "1234",
          "description": "ok",
          "category": "done",
          "UserId": 1,
          "createdAt": "2020-11-04T16:00:00.000Z",
          "updatedAt": "2020-11-06T06:54:13.111Z",
      }
    ]
    ```
 
* **Error Response:**

  * **Code:** 500 **Internal Server Error** <br />
    **Content:** `{ error: 'Internal Server Error' }`

* **Notes:**

  `This path showing all list of kanbans of all users`

**Add a Kanban**
----

* **URL**

  /task

* **Method:**

  `POST`
  
*  **URL Params**

   <_None_> 

* **Data Params**

  <_None_> 


* **Request Body**
  * **Content:**
    ```json
    {
        "title": "string",
        "description": "string",
        "category": "string"
    }
    ```

* **Success Response:**

  * **Code:** 201 **Created** <br />
    **Content:** 
    ```json
    {
    "id": 36,
    "title": "Mau bikin final project bulan depan",
    "description": "semoga saja cepat lulus",
    "category": "backlog",
    "UserId": 1,
    "updatedAt": "2020-11-20T04:19:51.936Z",
    "createdAt": "2020-11-20T04:19:51.936Z"
    }
    ```
 
* **Error Response:**
    `If error from the server`
  * **Code:** 500 **Internal Server Error** <br />
    **Content:** `{ error: 'Internal Server Error' }`

    `If error from the validate data input`
  * **Code:** 400 **Bad Request** <br />
    **Content:** 
    ```json
    {
        "error": "Title cannot be blank,Description cannot be blank, category cannot be blank"
    }
    ```

* **Notes:**

  `This path to add a Kanban and can do some validates`


**Show Task by Id**
----

* **URL**

  /task/:id

* **Method:**

  `POST`
  
*  **URL Params**

   <_require params id_> 

* **Data Params**

  <_None_> 


* **Request Body**
  <_None_> 
   

* **Success Response:**

  * **Code:** 200 **OK** <br />
    **Content:** 
    ```json
    {
      "id": 36,
      "title": "Mau bikin final project bulan depan",
      "description": "semoga saja cepat lulus",
      "category": "backlog",
      "UserId": 1,
      "updatedAt": "2020-11-20T04:19:51.936Z",
      "createdAt": "2020-11-20T04:19:51.936Z"
    }
    ```
 
* **Error Response:**
    `If error from the server`
  * **Code:** 500 **Internal Server Error** <br />
    **Content:** `{ error: 'Internal Server Error' }`


* **Notes:**

  `This path get kanban by id`

**Edit Data Kanban**
----

* **URL**

  /task/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   <_Require id_> 

* **Data Params**

  <_None_> 


* **Request Body**
  * **Content:**
    ```json
    {
        "title": "string",
        "description": "string",
        "category": "string"
    }
    ```

* **Success Response:**

  * **Code:** 200 **OK** <br />
    **Content:** 
    ```json
    {
      "id": 36,
      "title": "Mau bikin final project bulan depan",
      "description": "semoga saja cepat lulus",
      "category": "done",
      "UserId": 1,
      "updatedAt": "2020-11-20T04:19:51.936Z",
      "createdAt": "2020-12-20T04:19:51.936Z"
    }
    ```
 
* **Error Response:**
    `If error from the server`
  * **Code:** 500 **Internal Server Error** <br />
    **Content:** `{ error: 'Internal Server Error' }`

    `If error from the validate data input`
  * **Code:** 400 **Bad Request** <br />
    **Content:** 
    ```json
    {
        "error": "Title cannot be blank,Description cannot be blank, category cannot be blank"
    }
    ```

* **Notes:**

  `This path to edit Kanban and can do some validates`
**Edit Data Kanban's Category**
----

* **URL**

  /task/:id

* **Method:**

  `PATCH`
  
*  **URL Params**

   <_Require id_> 

* **Data Params**

  <_None_> 


* **Request Body**
  * **Content:**
    ```json
    {
        "category": "string"
    }
    ```

* **Success Response:**

  * **Code:** 200 **OK** <br />
    **Content:** 
    ```json
    {
      "id": 36,
      "title": "Mau bikin final project bulan depan",
      "description": "semoga saja cepat lulus",
      "category": "done",
      "UserId": 1,
      "updatedAt": "2020-11-20T04:19:51.936Z",
      "createdAt": "2020-12-20T04:19:51.936Z"
    }
    ```
 
* **Error Response:**
    `If error from the server`
  * **Code:** 500 **Internal Server Error** <br />
    **Content:** `{ error: 'Internal Server Error' }`

    `If error from the validate data input`
  * **Code:** 400 **Bad Request** <br />
    **Content:** 
    ```json
    {
        "error": "category cannot be blank"
    }
    ```

* **Notes:**

  `This path to edit Kanban's category and can do some validates`

**DELETE a Kanban**
----

* **URL**

  /task/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

   <_Require id_> 

* **Data Params**

  <_None_> 


* **Request Body**
  * **Content:**
    
    <_None_> 

* **Success Response:**

  * **Code:** 200 **OK** <br />
    **Content:** 
    ```json
    {
      "msg": "Task Deleted!"
    }
    ```
 
* **Error Response:**
    `If error from the server`
  * **Code:** 500 **Internal Server Error** <br />
    **Content:** `{ error: 'Internal Server Error' }`

    `If error from the validate data input`
  * **Code:** 400 **Bad Request** <br />
    **Content:** 
    ```json
    {
        "error": "Task not found!"
    }
    ```

* **Notes:**

  `This path to delete a kanban`

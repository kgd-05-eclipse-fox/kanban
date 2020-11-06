# Kanban

> Demo https://kanban-app-akbarhabiby.web.app/

**Show All Tasks**
----
  Returns json data from all tasks.

* **URL**

  /kanban

* **Method:**

  `GET`
  
*  **URL Params**

   None

* **Data Params**

   None

* **Request Body:**

  None

* **Success Response:**

  * **Code:** 200 **OK** <br />
    **Content:**
    ```json
    {
        "allTasks": [
            {
                "id": 1,
                "title": "......",
                "description": "......",
                "status": 1,
                "UserId": 1,
                "createdAt": "03-11-2020",
                "User": {
                    "email": "akbarhabiby@icloud.com"
                }
            }
        ]
    }
    ```
 
* **Error Response:**

  `If error from server`

  * **Code:** 500 **INTERNAL SERVER ERROR** <br />
    **Content:** 
    ```json
    {
       "error": "Internal Server Error" 
    }
    ```

  `If user doesn't login`

  * **Code:** 401 **Unauthorized** <br />
    **Content:** 
    ```json
    {
        "message": "Unauthorized"
    }
    ```

**Create Task**
----
  Returns json data after creating new Task.

* **URL**

  /kanban

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**

   None

* **Request Body:**

  * **Content:**
    ```json
    {
        "title": "Makan",
        "description": "Malam"
    }
    ```

* **Success Response:**

  * **Code:** 201 **CREATED** <br />
    **Content:** 
    ```json
    {
        "id": 2,
        "title": "Makan",
        "description": "Malam",
        "UserId": 1,
        "updatedAt": "<date>",
        "createdAt": "<date>",
        "status": 1
    }
    ```
 
* **Error Response:**

  `If validation error`

  * **Code:** 400 **BAD REQUEST** <br />
    **Content:** 
    ```json
    {
       "error": "Please complete all forms" 
    }
    ```

  `If error from server`

  * **Code:** 500 **INTERNAL SERVER ERROR** <br />
    **Content:** 
    ```json
    {
       "error": "Internal Server Error" 
    }
    ```


**Update Task**
----
  Returns json data after updating a Task.

* **URL**

  /kanban/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

   None

* **Request Body:**

  * **Content:**
    ```json
    {
        "title": "Makan",
        "description": "Siang"
    }
    ```

* **Success Response:**

  * **Code:** 200 **OK** <br />
    **Content:** 
    ```json
    {
        "msg": "Sucessfully Edit Task"
    }
    ```
 
* **Error Response:**

  `If validation error`

  * **Code:** 400 **BAD REQUEST** <br />
    **Content:** 
    ```json
    {
       "error" : "Please complete all forms" 
    }
    ```

  `If Task Not Found`

  * **Code:** 404 **NOT FOUND** <br />
    **Content:** 
    ```json
    {
        "message": "Task Not Found"
    }
    ```

  `If error from server`

  * **Code:** 500 **INTERNAL SERVER ERROR** <br />
    **Content:** 
    ```json
    {
       "error" : "Internal Server Error" 
    }
    ```

  `If user not authorized`

  * **Code:** 401 **Unauthorized** <br />
    **Content:** 
    ```json
    {
        "message": "Unauthorized"
    }
    ```


**Update Task Status**
----
  Returns json data after updating a Task status.

* **URL**

  /kanban/:id

* **Method:**

  `PATCH`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

   None

* **Request Body:**

  * **Content:**
    ```json
    {
        "status": 1
    }
    ```

* **Success Response:**

  * **Code:** 200 **OK** <br />
    **Content:** 
    ```json
    {
        "msg": "Successfully Update Task Status"
    }
    ```
 
* **Error Response:**

  `If Task Not Found`

  * **Code:** 404 **NOT FOUND** <br />
    **Content:** 
    ```json
    {
        "message": "Task Not Found"
    }
    ```

  `If error from server`

  * **Code:** 500 **INTERNAL SERVER ERROR** <br />
    **Content:** 
    ```json
    {
       "message" : "Internal Server Error" 
    }
    ```

  `If user not authorized`

  * **Code:** 401 **Unauthorized** <br />
    **Content:** 
    ```json
    {
        "message": "Unauthorized"
    }
    ```

**Delete Task**
----
  Return a message after success deleting Task.

* **URL**

  /kanban/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

   id

* **Request Body:**

   None

* **Success Response:**

  * **Code:** 200 **OK** <br />
    **Content:** 
    ```json
    {
        "msg": "Successfully Delete Task with Id 15"
    }
    ```
 
* **Error Response:**

  `If Task Not Found`

  * **Code:** 404 **NOT FOUND** <br />
    **Content:**
    ```json
    {
        "message": "Task Not Found"
    }
    ```

  `If error from server`

  * **Code:** 500 **INTERNAL SERVER ERROR** <br />
    **Content:**
    ```json
    {
        "message": "Internal Server Error"
    }
    ```
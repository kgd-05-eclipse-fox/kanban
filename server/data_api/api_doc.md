# KAND-BAND App

## **Register User**

Register user on server.

- **URL**

  /register

- **Method:**

  `POST`

- **Request Headers**

  None

- **URL Params**

  None

- **Data Params**

  **Required:**

  `email=[string]`
  `password=[string]`

- **Success Response:**

  - **Code:** 201 CREATED <br />
    **Content:**
    `{ "id": 1, "email": "aaa@a.com" }`

- **Error Response:**

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg : "Internal server error!" }`

---

## **Login User**

Login user on server.

- **URL**

  /login

- **Method:**

  `POST`

- **Request Headers**

  None

- **URL Params**

  None

- **Data Params**

  **Required:**

  `email=[string]`
  `password=[string]`

- **Success Response:**

  - **Code:** 200 OK <br />
    **Content:**
    ```
    {
      "access_token": "<your access token>"
    }
    ```

- **Error Response:**

  - **Code:** 400 BAD REQUEST <br />
    **Content:** `{ msg : "Invalid email or password!" }`

  OR

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg : "Internal server error!" }`

---

## **Add Task**

Add Task.

- **URL**

  /tasks

- **Method:**

  `POST`

- **Request Headers**

  ```
  {
   "access_token": "<your access token>"
  }
  ```

- **URL Params**

  None

- **Success Response:**

  - **Code:** 200 OK <br />
    **Content:**
    ```
    {
      "access_token": "<your access token>"
    }
    ```

- **Error Response:**

  - **Code:** 400 BAD REQUEST <br />
    **Content:** `{ msg : "Invalid email or password!" }`

  OR

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg : "Internal server error!" }`

---

- **GET Task**

> see all the Tasks

- **URL**

  /tasks/:id

- **Method:**

  `GET`

- **_Request Header_**

```
{
  "accesstoken": "<your access token>"
}
```

- **_Request Body_**

```
not needed
```

- **_Response (200)_**

```
{
    {
        title : "contoh 1",
        category : "TODO"
    },
    {
        title : "contoh 2",
        category :"IN PROGRES"
    }
}
```

- **_Response (500 - Internal server error)_**

```
{
  "errors": "internal server error"
}
```

---

- **EDIT Task by id**

> Edit a specific Task by id

- **URL**

  /tasks/:id

- **Method:**

  `PUT`

- **_Request Header_**

```
{
  "accesstoken": "<your access token>"
}
```

- **_Request Params_**

```
{
  "id": "<your id>"
}
```

- **_Response (200)_**

```

{
    {
        title : "contoh 1",
        category : "TODO"
    },
    {
        title : "contoh 2",
        category :"IN PROGRES"
    }
}
```

- **_Response (404 - Not Found)_**

```
{
  "errors": "Task not found"
}
```

- **_Response (500 - Internal server error)_**

```
{
  "errors": "internal server error"
}
```

---

## **DELETE Tasks **

delete a tasks.

- **URL**

  /tasks/:id

- **Method:**

  `DELETE`

- **Request Headers**

  None

- **URL Params**

  None

- **Success Response:**

  - **Code:** 201 CREATED <br />
    **Content:**
    {
    "deleted success"
    }

- **Error Response:**

  - **Code:** 400 BAD REQUEST <br />
    **Content:** `{ msg : "Task not Found" }`

  OR

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg : "Internal server error!" }`

---

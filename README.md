# Kanban

## User Register

#### Returns json data about a single user.

* ## URL

```h
    http:localhost:3000/register
```

* ## Method:

     `GET`

* ## URL Params

    none

* ## Data Params

```json
    {
        "email": "user@gmail.com",
        "password": "user"
    }
```

* ## Success Response:

```json
    Status: 200

    {
        "id": 6,
        "email": "user@gmail.com"
    }
```
* ## Error Response:

```json
    {
        "msg": "Email tidak Valid, Password tidak boleh kosong"
    }

    {
        "msg": "Email tidak boleh kosong, Email tidak Valid"
    }

    {
        "msg": "Email tidak boleh kosong, Email tidak Valid, Password tidak boleh kosong"
    }

    {
        "msg": "User.email cannot be null, Password tidak boleh kosong"
    }

    {
        "msg": "User.password cannot be null, Email tidak boleh kosong, Email tidak Valid"
    }

    {
        "msg": "User.email cannot be null, User.password cannot be null"
    }
```

---
<br>

# User Login

* ## URL
```h
    http:localhost:3000/users/login
```

* ## Method:

    `POST`

* ## URL Params

    `None`

* ## Data Params
```json
    {
        "email": "user@gmail.com",
        "password": "user"
    }
```
* ## Success Response:

```json
    Status: 200

    {
        "id": 6,
        "email": "user@gmail.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJuYWltQGdtYWlsLmNvbSIsImlhdCI6MTYwNDA0MTMzOH0.nusWIqZFrLAO7T1Lz5V4GZaG2x3IKDpYytqCGRwkl3o"
    }
```
* ## Error Response:
```json
    Status: 401

    {
        "msg": "Email atau Password anda tidak Valid"
    }

    {
        "msg": "Interal Server Error"
    }
```

----
<br>

# Create Kanban

* ## URL
```h
    http:localhost:3000/tasks
```

* ## Method:

    `POST`

* ## URL Params

    `None`

* ## Headers

    `access_token`
    ```json
    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJuYW1pQGdtYWlsLmNvbSIsImlhdCI6MTYwNDUwNDU3M30.cQqtzL8uN7cmA3xEguhuW84EF45oQ6vXPpAS4KS5iHs
    ```

* ## Data Body
```json
    {
        "title": "string",
        "description": "string"
    }
```
* ## Success Response:

```json
    Status: 200

    ===INPUR===

    {
        "title": "terbang",
        "description": "tebang kelangit"
    }

    ===OUTPUT===

    {
        "id": 64,
        "title": "terbang",
        "description": "tebang kelangit",
        "UserId": 1,
        "updatedAt": "2020-11-06T18:15:22.325Z",
        "createdAt": "2020-11-06T18:15:22.325Z",
        "imgUser": "../assets/img/star.png",
        "status": "backlog"
    }
```
* ## Error Response:
```json
    Status: 401

    {
        "msg": "title tidak boleh kosong"
    }

    {
        "msg": "description tidak boleh kosong"
    }
```

---
<br>

# Get All data Kanban

* ## URL
```h
    http:localhost:3000/tasks
```

* ## Method:

    `GET`

* ## URL Params

    `None`

* ## Headers

    `access_token`
    ```json
    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJuYW1pQGdtYWlsLmNvbSIsImlhdCI6MTYwNDUwNDU3M30.cQqtzL8uN7cmA3xEguhuW84EF45oQ6vXPpAS4KS5iHs
    ```

* ## Data Body

    `None`

* ## Success Response:

```json
    Status: 200

[
    {
        "id": 1,
        "title": "Nama Ku Bulan",
        "description": "ngoding baaaaaaaaaaaaaaareng bulan dan bintang bersama sinar bulan purnama yang bulat nan indah",
        "status": "backlog",
        "imgUser": "../assets/img/star.png",
        "UserId": 1,
        "createdAt": "2020-11-06T12:43:26.856Z",
        "updatedAt": "2020-11-06T12:43:26.856Z"
    },
    {
        "id": 2,
        "title": "Efektivitas",
        "description": "Pengurangan penggunaan sumber daya untuk memperoleh jumlah hasil produksi. Hal ini dilakukan agar sumber yang digunakan lebih irit dan terhindar pemborosan",
        "status": "done",
        "imgUser": "../assets/img/star.png",
        "UserId": 1,
        "createdAt": "2020-11-06T12:45:20.861Z",
        "updatedAt": "2020-11-06T12:45:33.505Z"
    }
]
```
* ## Error Response:
```json
    Status: 500

    {
        "msg": "Internal server Error"
    }
```
<br>

# GET Data Kanban BY Id

* ## URL
```h
    http:localhost:3000/tasks/:id
```

* ## Method:

    `GET`

* ## URL Params

    `http:localhost:3000/tasks/54`

* ## Headers

    `access_token`
    ```json
    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJuYW1pQGdtYWlsLmNvbSIsImlhdCI6MTYwNDUwNDU3M30.cQqtzL8uN7cmA3xEguhuW84EF45oQ6vXPpAS4KS5iHs
    ```

* ## Data Body

    `None`

* ## Success Response:

```json
    Status: 200

    {
        "id": 54,
        "title": "Drama LC",
        "description": "ngoding bareng bulan dan bintang bersama sinar bulan purnama yang bulat nan indah",
        "status": "product",
        "imgUser": "../assets/img/star.png",
        "UserId": 1,
        "createdAt": "2020-11-06T13:49:21.512Z",
        "updatedAt": "2020-11-06T13:50:31.889Z"
    }
```
* ## Error Response:
```json
    Status: 500

    {
        "msg": "Internal server Error"
    }
```

---
<br>

# Edit Data Kanban

* ## URL
```h
    http:localhost:3000/tasks/:id
```

* ## Method:

    `PUT`

* ## URL Params

    `http:localhost:3000/tasks/54`

* ## Headers

    `access_token`
    ```json
    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJuYW1pQGdtYWlsLmNvbSIsImlhdCI6MTYwNDUwNDU3M30.cQqtzL8uN7cmA3xEguhuW84EF45oQ6vXPpAS4KS5iHs
    ```

* ## Data Body
```json
    {
        "title": "string",
        "description": "string"
    }
```
* ## Success Response:

```json
    Status: 200

    ===INPUR===

    {
        "title": "mendaki",
        "description": "mendaki kelangit"
    }

    ===OUTPUT===

    {
        "id": 64,
        "title": "mendaki",
        "description": "mendaki kelangit",
        "UserId": 1,
        "updatedAt": "2020-11-06T18:15:22.325Z",
        "createdAt": "2020-11-06T18:15:22.325Z",
        "imgUser": "../assets/img/star.png",
        "status": "backlog"
    }
```
* ## Error Response:
```json
    Status: 401

    {
        "msg": "title tidak boleh kosong"
    }

    {
        "msg": "description tidak boleh kosong"
    }

    {
        "msg": "Internal server error"
    }
```

---
<br>

# Edit Status Kanban

* ## URL
```h
    http:localhost:3000/tasks/:id
```

* ## Method:

    `PATCH`

* ## URL Params

    `http:localhost:3000/tasks/54`

* ## Headers

    `access_token`
    ```json
    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJuYW1pQGdtYWlsLmNvbSIsImlhdCI6MTYwNDUwNDU3M30.cQqtzL8uN7cmA3xEguhuW84EF45oQ6vXPpAS4KS5iHs
    ```

* ## Data Body
```json
    {
        "title": "string",
        "description": "string"
    }
```
* ## Success Response:

```json
    Status: 201

    ===INPUR===

    {
        "title": "mendaki",
        "description": "mendaki kelangit"
    }

    ===OUTPUT===

    {
        "id": 64,
        "title": "mendaki",
        "description": "mendaki kelangit",
        "UserId": 1,
        "updatedAt": "2020-11-06T18:15:22.325Z",
        "createdAt": "2020-11-06T18:15:22.325Z",
        "imgUser": "../assets/img/star.png",
        "status": "done"
    }
```
* ## Error Response:
```json
    Status: 401

    {
        "msg": "title tidak boleh kosong"
    }

    {
        "msg": "description tidak boleh kosong"
    }

    {
        "msg": "Internal server error"
    }
```

---
<br>

# Delete Data Kanban

* ## URL
```h
    http:localhost:3000/tasks/:id
```

* ## Method:

    `DELETE`

* ## URL Params

    `http:localhost:3000/tasks/54`

* ## Headers

    `access_token`
    ```json
    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJuYW1pQGdtYWlsLmNvbSIsImlhdCI6MTYwNDUwNDU3M30.cQqtzL8uN7cmA3xEguhuW84EF45oQ6vXPpAS4KS5iHs
    ```

* ## Data Body

    `None`

* ## Success Response:

```json
    Status: 200

    {
        "msg": "Delete Kanban berhasil"
    }

```
* ## Error Response:
```json
    Status: 500

    {
        "msg": "Internal server error"
    }
```

---
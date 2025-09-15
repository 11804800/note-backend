# Note Backend Api

Objective: Develop and deploy a multi-tenant SaaS Notes Application. The application will allow multiple tenants (companies) to securely manage their users and notes, while enforcing role-based access and subscription limits.  



## Approach 

database-per-tenant

---

## Base URL
All API requests are made to your server's base URL, for example:


## Endpoints Overview

- **Tenants Management:** Sign up, login, profile management
- **Note Management:** View, add,update,delete 
- **Plan Management:** View

---

## tenant Endpoints (`/tenants`)

### 1. Get User Profile
- **Method:** `GET`
- **Endpoint:** `/tenants/`
- **Description:** Retrieves the profile information of the authenticated user.
- **Headers:**
```
Authorization: JWT <your_token>
```

- **Responses:**
- `200 OK` — User data returned
- `401 Unauthorized` — Authentication failed

---

### 2. Sign Up
- **Method:** `POST`
- **Endpoint:** `/tenants/signup`
- **Description:** Creates a new user account.
- **Request Body:**
```json
{
  "fistname": "string",
  "lastname":"string",
  "username":"string",
  "tenant":"string",
  "password": "string"
}

```
- **Responses:**
- `200 Created` — User successfully registered
- `400 Bad Request` — Validation errors

### 3. Login
- **Method**: `POST`
- **Endpoint**: `/user/login`
- **Description**: `Authenticates user and returns a token.`
- **Request Body:**
```
{
  "username": "string",
  "password": "string",
  "tenant":"string"
}`

```
- **Responses:**
- `200 OK` — Returns auth token
-  `401 Unauthorized` — Invalid credentials


### 3. Note Create

#### Create Order
- **Method:** `POST`
- **Endpoint:** `/notes`
- **Description:** Creates a new order with the provided details.
- **Headers:**
- `Authorization`: Bearer <your_token>

- **Request Body:**
```json
{
    "title":"string",
    "description":"string"
}
```

- **Responses:**
- `200` Created — Order created successfully
- `400` Bad Request — Invalid input data


### 4. Get Note

#### Get Note
- **Method:** `Get`
- **Endpoint:** `/notes`
- **Description:** get order with the provided details.
- **Headers:**
- `Authorization`: Bearer <your_token>

- **Responses:**
- `200 OK` — Returns an array of orders
- `401 Unauthorized` — User not authenticated

### 5. Get Note By Id

#### Get Note
- **Method:** `Get`
- **Endpoint:** `/notes/:id`
- **Description:** get order with the provided details.
- **Headers:**
- `Authorization`: Bearer <your_token>

- **Responses:**
- `200 OK` — Returns an array of orders
- `401 Unauthorized` — User not authenticated

### 6. Update Note

#### Get Note
- **Method:** `put`
- **Endpoint:** `/notes/:id`
- **Description:** get order with the provided details.
- **Headers:**
- `Authorization`: Bearer <your_token>

- **Request Body:**
```json
{
    "title":"string",
    "description":"string"
}
```

- **Responses:**
- `200 OK` — Returns an array of orders
- `401 Unauthorized` — User not authenticated

### 7. Delete Note By ID

#### Get Note
- **Method:** `delete`
- **Endpoint:** `/notes/:id`
- **Description:** get order with the provided details.
- **Headers:**
- `Authorization`: Bearer <your_token>

- **Responses:**
- `200 OK` — Returns an array of orders
- `401 Unauthorized` — User not authenticated

### 8. Updgrade Plan User

#### Get Note
- **Method:** `Put`
- **Endpoint:** `/tenants/upgrade`
- **Description:** get order with the provided details.
- **Headers:**
- `Authorization`: Bearer <your_token>

- **Request Body:**
```json
{
    "plan":"string",
}
```

- **Responses:**
- `200 OK` — Returns an array of orders
- `401 Unauthorized` — User not authenticated

### 9. Updgrade Plan By Admin

#### Get Note
- **Method:** `Put`
- **Endpoint:** `/tenants/:slug/upgrade`
- **Description:** get order with the provided details.
- **Headers:**
- `Authorization`: Bearer <your_token>

- **Request Body:**
```json
{
    "plan":"string",
}
```

- **Responses:**
- `200 OK` — Returns an array of orders
- `401 Unauthorized` — User not authenticated
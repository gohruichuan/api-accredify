# essentials

## Project setup

```
# yarn
yarn install
```

### Compiles and hot-reloads for development

```
# yarn
yarn start
```

### !!!IMPORTANT ENV VARIABLE (FOR LOCAL)

```
# Rename sample.env to .env
```

## API Architecture

See [API Architecture](https://miro.com/app/board/uXjVM6G5dI4=/?share_link_id=800805685663).

## Login API

### /login

To login user, validate user credentials, and get user data from database along with sign JWT token back to browser

```
POST https://api-accredify-d799d4385f74.herokuapp.com/login

Content-Type: application/json

{
    "username": "geraldgoh@gmail.com"
}
```

### /login/verify

To login user by verifying JWT token, get user data from database and send back to browser

```
POST https://api-accredify-d799d4385f74.herokuapp.com/login

Content-Type: application/json

{
    "username": "geraldgoh@gmail.com"
}
```

## Documents API

### /document-module/identities/1/documents

To get logged in user's documents by default: 1st page and in descending order

```
GET https://api-accredify-d799d4385f74.herokuapp.com/document-module/identities/1/documents

Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiZ2VyYWxkZ29oQGdtYWlsLmNvbSIsImlhdCI6MTY4ODExODc2MX0.gAkICAZ-lODJ5ozD1PeKwuZR_CUC1eBj40zChCE3MRk

```

## Documents API - Query Params (Optional)

### /document-module/identities/1/documents?page=2

To get logged in user's documents by pages (query params)

```
GET https://api-accredify-d799d4385f74.herokuapp.com/document-module/identities/1/documents?page=2

Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiZ2VyYWxkZ29oQGdtYWlsLmNvbSIsImlhdCI6MTY4ODExODc2MX0.gAkICAZ-lODJ5ozD1PeKwuZR_CUC1eBj40zChCE3MRk
```

### /document-module/identities/1/documents?page=1&sortBy=ASC

To get logged in user's documents by pages and ascending order (query params)

```
GET https://api-accredify-d799d4385f74.herokuapp.com/document-module/identities/1/documents?page=1&sortBy=ASC

Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiZ2VyYWxkZ29oQGdtYWlsLmNvbSIsImlhdCI6MTY4ODExODc2MX0.gAkICAZ-lODJ5ozD1PeKwuZR_CUC1eBj40zChCE3MRk

```

### /document-module/identities/1/documents?page=1&sortBy=DESC

To get logged in user's documents by pages and descending order (query params)

```
GET https://api-accredify-d799d4385f74.herokuapp.com/document-module/identities/1/documents?page=1&sortBy=DESC

Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiZ2VyYWxkZ29oQGdtYWlsLmNvbSIsImlhdCI6MTY4ODExODc2MX0.gAkICAZ-lODJ5ozD1PeKwuZR_CUC1eBj40zChCE3MRk

```

## Career Goals API

### /career-goals

To get logged in user's career-goals

```
GET https://api-accredify-d799d4385f74.herokuapp.com/career-goals

Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiZ2VyYWxkZ29oQGdtYWlsLmNvbSIsImlhdCI6MTY4ODExODc2MX0.gAkICAZ-lODJ5ozD1PeKwuZR_CUC1eBj40zChCE3MRk
```

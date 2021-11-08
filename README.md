# Response Transformer
[![npm version](https://badge.fury.io/js/response-transformer.svg)](https://badge.fury.io/js/response-transformer)
[![GitHub license](https://img.shields.io/github/license/bencoderus/response-transformer)](https://github.com/bencoderus/response-transformer/blob/master/LICENSE)
[![Build Status](https://app.travis-ci.com/bencoderus/response-transformer.svg?branch=master)](https://app.travis-ci.com/bencoderus/response-transformer)

Response Transformer helps you standardize your REST API response on NodeJS. It also comes with tons of response methods and functionalities with full Typescript support.

# Getting started
Installation using npm

```bash
npm i response-transformer --save
```

Installation using yarn

```bash
yarn add response-transformer
```

# Usage
ES5

```jsx
const { okResponse, badRequestResponse } = require('response-transformer')
```

ES6

```jsx
import { okResponse, badRequestResponse } from 'response-transformer'
```

Using with express

```jsx
import express from 'express'
import { okResponse, badRequestResponse, validationError, sendResponse, statusCodes } from 'response-transformer'

const app = express()

app.get('/health-check', (request, response) => {
  return okResponse(response, 'Everything looks good', {
    name: 'Benjamin Iduwe',
    role: 'Software engineer',
  })
})

app.get('check', (request, response) => {
  return sendResponse(response, statusCodes.ACCEPTED, 'Received for processing')
})

app.get('check', (request, response) => {
  return validationError(response, 'Validation error', 'Name is required')
})
```

Returns


200: /health-check
```json
{
    "status": true,
    "message": "Everything looks good",
    "data": {
        "name": "Benjamin Iduwe",
        "role": "Software engineer"
    }
}

```

202: /check
```json
{
	"status": true,
	"message": "Received for processing",
}
```

422: /create
```json
{
	"status": false,
	"message": "Validation error",
	"error": "Name is required",
}
```


#### Using HttpException to throw Http errors
```js
import { HttpException, statusCodes } from 'response-transformer';

const getName = (name) => {
    if(! name){
        throw new HttpException('Name is invalid', statusCodes.NOT_FOUND);
    }
}
```

#### HttpException properties 
- Status code: The status code for the exception (error.statusCode).
- shouldReport: Report only exception for server errors >= 500 (error.shouldReport)

#### Supported status codes

- OK = 200.
- CREATED = 201.
- ACCEPTED = 202.
- NO_CONTENT = 204.
- BAD_REQUEST = 400.
- PAYMENT_REQUIRED = 402.
- UNAUTHORIZED = 401.
- FORBIDDEN = 403,
- NOT_FOUND = 404.
- METHOD_NOT_ALLOWED = 405.
- CONFLICT = 409.
- UNPROCESSABLE_ENTITY = 422.
- SERVER_ERROR = 500.
- BAD_GATEWAY = 502.
- SERVICE_UNAVAILABLE = 503.
- GATEWAY_TIMEOUT = 504.

#### Supported frameworks

1. Express
2. NestJS
3. AdonisJS
4. SailJS

#### Available methods
```jsx
okResponse(response, message, data);

createdResponse(response, message, data);

badRequestResponse(response, message, data);

unauthorizedResponse(response, message, data);

paymentRequiredResponse(response, message, data);

forbiddenResponse(response, message, data);

notFoundResponse(response, message, data);

methodNotAllowedResponse(response, message, data);

serverErrorResponse(response, message, data);

badGatewayResponse(response, message, data);

serviceUnavailableResponse(response, message, data);

sendResponse(response, statusCode, message, data);
```
# Test
```bash
npm run test
```
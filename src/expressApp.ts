import express, { Request, Response } from 'express';
import { badRequestResponse, okResponse, serverErrorResponse } from '.';

const app = express();

app.get('/ok', (request: express.Request, response: express.Response) => {
  return okResponse(response, 'Hello world', {
    name: 'John Doe',
    age: 42,
  });
});

app.get('/bad-request', (request: Request, response: Response) => {
  return badRequestResponse(response, 'Unable to process request');
});

app.get('/server-error', (request: Request, response: Response) => {
  return serverErrorResponse(response, 'Unable to process request');
});

export default app;

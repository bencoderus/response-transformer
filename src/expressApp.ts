import express, { Request, Response } from 'express';
import {
  badGatewayResponse,
  badRequestResponse,
  createdResponse,
  forbiddenResponse,
  HttpException,
  methodNotAllowedResponse,
  notFoundResponse,
  okResponse,
  paymentRequiredResponse,
  sendResponse,
  serverErrorResponse,
  serviceUnavailableResponse,
  unauthorizedResponse,
  validationErrorResponse,
} from '.';
import statusCodes from './utils/statusCodes';

const app = express();

app.get('/ok', (request: Request, response: Response) => {
  return okResponse(response, 'OK');
});

app.get('/http-exception', () => {
  throw new HttpException('Http exception thrown', statusCodes.SERVER_ERROR);
});

app.get('/created', (request: Request, response: Response) => {
  return createdResponse(response, 'CREATED', {
    name: 'John Doe',
    age: 42,
  });
});

app.get('/send-response', (request: Request, response: Response) => {
  return sendResponse(response, statusCodes.CONFLICT, 'CONFLICT');
});

app.get('/bad-request', (request: Request, response: Response) => {
  return badRequestResponse(response, 'BAD_REQUEST');
});

app.get('/unauthorized', (request: Request, response: Response) => {
  return unauthorizedResponse(response, 'UNAUTHORIZED');
});

app.get('/payment-required', (request: Request, response: Response) => {
  return paymentRequiredResponse(response, 'PAYMENT_REQUIRED');
});

app.get('/forbidden', (request: Request, response: Response) => {
  return forbiddenResponse(response, 'FORBIDDEN');
});

app.get('/not-found', (request: Request, response: Response) => {
  return notFoundResponse(response, 'NOT_FOUND');
});

app.get('/method-not-allowed', (request: Request, response: Response) => {
  return methodNotAllowedResponse(response, 'METHOD_NOT_ALLOWED');
});

app.get('/validation-error', (request: Request, response: Response) => {
  return validationErrorResponse(response, 'UNPROCESSABLE_ENTITY');
});

app.get('/server-error', (request: Request, response: Response) => {
  return serverErrorResponse(response, 'SERVER_ERROR');
});

app.get('/service-unavailable', (request: Request, response: Response) => {
  return serviceUnavailableResponse(response, 'SERVICE_UNAVAILABLE');
});

app.get('/bad-gateway', (request: Request, response: Response) => {
  return badGatewayResponse(response, 'BAD_GATEWAY');
});

export default app;

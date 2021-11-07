import supertest from 'supertest';
import app from '../src/expressApp';
import statusCodes from '../src/utils/statusCodes';

const request = supertest(app);

test('Page would return a 200 response', async () => {
  const response = await request.get('/ok');

  expect(response.body.status).toBe(true);
  expect(response.status).toBe(statusCodes.OK);
  expect(response.body.message).toBe('OK');
});

test('Page would return a 201 response', async () => {
  const response = await request.get('/created');

  expect(response.body.status).toBe(true);
  expect(response.status).toBe(statusCodes.CREATED);
  expect(response.body.message).toBe('CREATED');
  expect(response.body.data.name).toBe('John Doe');
});

test('Page would return a 400 response', async () => {
  const response = await request.get('/bad-request');

  expect(response.body.status).toBe(false);
  expect(response.status).toBe(statusCodes.BAD_REQUEST);
  expect(response.body.message).toBe('BAD_REQUEST');
});

test('Page would return a 401 response', async () => {
  const response = await request.get('/unauthorized');

  expect(response.body.status).toBe(false);
  expect(response.status).toBe(statusCodes.UNAUTHORIZED);
  expect(response.body.message).toBe('UNAUTHORIZED');
});

test('Page would return a 402 response', async () => {
  const response = await request.get('/payment-required');

  expect(response.body.status).toBe(false);
  expect(response.status).toBe(statusCodes.PAYMENT_REQUIRED);
  expect(response.body.message).toBe('PAYMENT_REQUIRED');
});

test('Page would return a 403 response', async () => {
  const response = await request.get('/forbidden');

  expect(response.body.status).toBe(false);
  expect(response.status).toBe(statusCodes.FORBIDDEN);
  expect(response.body.message).toBe('FORBIDDEN');
});

test('Page would return a 404 response', async () => {
  const response = await request.get('/not-found');

  expect(response.body.status).toBe(false);
  expect(response.status).toBe(statusCodes.NOT_FOUND);
  expect(response.body.message).toBe('NOT_FOUND');
});

test('Page would return a 405 response', async () => {
  const response = await request.get('/method-not-allowed');

  expect(response.body.status).toBe(false);
  expect(response.status).toBe(statusCodes.METHOD_NOT_ALLOWED);
  expect(response.body.message).toBe('METHOD_NOT_ALLOWED');
});

test('Page would return a 422 response', async () => {
  const response = await request.get('/validation-error');

  expect(response.body.status).toBe(false);
  expect(response.status).toBe(statusCodes.UNPROCESSABLE_ENTITY);
  expect(response.body.message).toBe('UNPROCESSABLE_ENTITY');
});

test('Page would return a 500 response', async () => {
  const response = await request.get('/server-error');

  expect(response.body.status).toBe(false);
  expect(response.status).toBe(statusCodes.SERVER_ERROR);
  expect(response.body.message).toBe('SERVER_ERROR');
});

test('Page would return a 502 response', async () => {
  const response = await request.get('/bad-gateway');

  expect(response.body.status).toBe(false);
  expect(response.status).toBe(statusCodes.BAD_GATEWAY);
  expect(response.body.message).toBe('BAD_GATEWAY');
});

test('Page would return a 503 response', async () => {
  const response = await request.get('/service-unavailable');

  expect(response.body.status).toBe(false);
  expect(response.status).toBe(statusCodes.SERVICE_UNAVAILABLE);
  expect(response.body.message).toBe('SERVICE_UNAVAILABLE');
});

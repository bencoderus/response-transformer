import supertest from 'supertest';
import app from '../src/expressApp';
import statusCodes from '../src/utils/statusCodes';

const request = supertest(app);

test('Page would return a 200 response', async () => {
  const response = await request.get('/ok');

  expect(response.status).toBe(statusCodes.OK);
});

test('Page would return a 400 response', async () => {
  const response = await request.get('/bad-request');

  expect(response.status).toBe(statusCodes.BAD_REQUEST);
});

test('Page would return a 500 response', async () => {
  const response = await request.get('/server-error');

  expect(response.status).toBe(statusCodes.SERVER_ERROR);
});

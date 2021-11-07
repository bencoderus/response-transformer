import supertest from 'supertest';
import app from '../src/expressApp';
import statusCodes from '../src/utils/statusCodes';

const request = supertest(app);

test('Assert an exception was thrown', async () => {
  const response = await request.get('/http-exception');

  expect(response.status).toBe(statusCodes.SERVER_ERROR);
});

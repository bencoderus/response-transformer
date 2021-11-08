import { ResponseInterface } from '../../types/response.interface';
import respond from '../respond';

export const sendResponse = (
  response: ResponseInterface,
  statusCode: number,
  message: string,
  data?: unknown,
): ResponseInterface => {
  return respond(response, statusCode, message, data);
};

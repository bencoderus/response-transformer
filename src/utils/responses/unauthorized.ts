import { ResponseInterface } from '../../types/response.interface';
import respond from '../respond';
import statusCodes from '../statusCodes';

export const unauthorizedResponse = (
  response: ResponseInterface,
  message: string,
  data?: unknown,
): ResponseInterface => {
  return respond(response, statusCodes.UNAUTHORIZED, message, data);
};

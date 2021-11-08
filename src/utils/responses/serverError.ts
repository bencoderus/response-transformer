import { ResponseInterface } from '../../types/response.interface';
import respond from '../respond';
import statusCodes from '../statusCodes';

export const serverErrorResponse = (
  response: ResponseInterface,
  message: string,
  data?: unknown,
): ResponseInterface => {
  return respond(response, statusCodes.SERVER_ERROR, message, data);
};

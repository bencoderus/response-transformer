import { ResponseInterface } from '../../interfaces/response.interface';
import respond from '../respond';
import statusCodes from '../statusCodes';

export const methodNotAllowedResponse = (
  response: ResponseInterface,
  message: string,
  data?: unknown,
): ResponseInterface => {
  return respond(response, statusCodes.METHOD_NOT_ALLOWED, message, data);
};

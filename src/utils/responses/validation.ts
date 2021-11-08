import { ResponseInterface } from '../../types/response.interface';
import respond from '../respond';
import statusCodes from '../statusCodes';

export const validationErrorResponse = (
  response: ResponseInterface,
  message: string,
  data?: unknown,
): ResponseInterface => {
  return respond(response, statusCodes.UNPROCESSABLE_ENTITY, message, data);
};

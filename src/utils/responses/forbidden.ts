import { ResponseInterface } from '../../interfaces/response.interface';
import respond from '../respond';
import statusCodes from '../statusCodes';

export const forbiddenResponse = (response: ResponseInterface, message: string, data?: unknown): ResponseInterface => {
  return respond(response, statusCodes.FORBIDDEN, message, data);
};

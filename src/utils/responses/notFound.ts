import { ResponseInterface } from '../../interfaces/response.interface';
import respond from '../respond';
import statusCodes from '../statusCodes';

export const notFoundResponse = (response: ResponseInterface, message: string, data?: unknown): ResponseInterface => {
  return respond(response, statusCodes.NOT_FOUND, message, data);
};

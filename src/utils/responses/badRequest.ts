import { ResponseInterface } from '../../interfaces/response.interface';
import respond from '../respond';
import statusCodes from '../statusCodes';

export const badRequestResponse = (response: ResponseInterface, message: string, data?: unknown): ResponseInterface => {
  return respond(response, statusCodes.BAD_REQUEST, message, data);
};

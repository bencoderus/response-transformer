import { ResponseInterface } from '../../types/response.interface';
import respond from '../respond';
import statusCodes from '../statusCodes';

export const okResponse = (response: ResponseInterface, message: string, data?: unknown): ResponseInterface => {
  return respond(response, statusCodes.OK, message, data);
};

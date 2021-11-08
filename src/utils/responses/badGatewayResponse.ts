import { ResponseInterface } from '../../types/response.interface';
import respond from '../respond';
import statusCodes from '../statusCodes';

export const badGatewayResponse = (response: ResponseInterface, message: string, data?: unknown): ResponseInterface => {
  return respond(response, statusCodes.BAD_GATEWAY, message, data);
};

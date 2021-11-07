import { Response } from 'express';
import respond from '../respond';
import statusCodes from '../statusCodes';

export const unauthorizedResponse = (response: Response, message: string, data?: any): Response => {
  return respond(response, statusCodes.UNAUTHORIZED, message, data);
};

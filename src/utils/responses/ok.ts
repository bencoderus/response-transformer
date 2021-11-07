import { Response } from 'express';
import respond from '../respond';
import statusCodes from '../statusCodes';

export const okResponse = (response: Response, message: string, data?: any): Response => {
  return respond(response, statusCodes.OK, message, data);
};

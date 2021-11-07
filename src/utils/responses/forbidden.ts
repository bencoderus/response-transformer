import { Response } from 'express';
import respond from '../respond';
import statusCodes from '../statusCodes';

export const forbiddenResponse = (response: Response, message: string, data?: any): Response => {
  return respond(response, statusCodes.FORBIDDEN, message, data);
};

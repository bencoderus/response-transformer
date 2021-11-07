import { Response } from 'express';
import respond from '../respond';
import statusCodes from '../statusCodes';

export const serverErrorResponse = (response: Response, message: string, data?: any): Response => {
  return respond(response, statusCodes.SERVER_ERROR, message, data);
};

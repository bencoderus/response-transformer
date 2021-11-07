import { Response } from 'express';
import respond from '../respond';
import statusCodes from '../statusCodes';

export const createdResponse = (response: Response, message: string, data?: any): Response => {
  return respond(response, statusCodes.CREATED, message, data);
};

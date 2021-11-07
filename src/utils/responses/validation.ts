import { Response } from 'express';
import respond from '../respond';
import statusCodes from '../statusCodes';

export const validationErrorResponse = (response: Response, message: string, data?: any): Response => {
  return respond(response, statusCodes.UNPROCESSABLE_ENTITY, message, data);
};

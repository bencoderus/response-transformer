import { Response } from 'express';
import respond from '../respond';
import statusCodes from '../statusCodes';

export const sendResponse = (response: Response, statusCode: number, message: string, data?: any): Response => {
  return respond(response, statusCode, message, data);
};

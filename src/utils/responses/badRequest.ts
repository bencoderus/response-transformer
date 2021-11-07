import { Response } from 'express';
import respond from '../respond';
import statusCodes from '../statusCodes';

export const badRequestResponse = (response: Response, message: string, data?: unknown): Response => {
  return respond(response, statusCodes.BAD_REQUEST, message, data);
};

import { Response } from 'express';
import respond from '../respond';
import statusCodes from '../statusCodes';

export const methodNotAllowedResponse = (response: Response, message: string, data?: unknown): Response => {
  return respond(response, statusCodes.METHOD_NOT_ALLOWED, message, data);
};

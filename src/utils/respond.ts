import { Response } from 'express';

export default (response: Response, statusCode: number, message: string, data: any): Response => {
  const status = statusCode >= 200 && statusCode <= 205;

  const responseData = !data ? { status, message } : { status, message, data };

  return response.status(statusCode).json(responseData);
};

export class HttpException extends Error {
  public error: any;
  public statusCode: number;
  public shouldReport: boolean;

  constructor(error: any, statusCode: number) {
    super(error);

    this.error = error;
    this.statusCode = statusCode;
    this.shouldReport = this.shouldReportException(statusCode);
  }

  private shouldReportException(statusCode: number): boolean {
    return statusCode >= 500 && statusCode <= 504 ? true : false;
  }
}

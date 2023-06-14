export enum IMethod {
    GET = 'GET',
    POST = 'POST'
  }
  export interface IData {
    [propsName: string]: any;
  }
  
  export interface IContentType {
    JSON: 'application/json';
    FORM: 'application/x-www-form-urlencoded';
  }
  
  export interface IHeader {
    'content-type'?: IContentType;
  }
  
  export interface IRequest {
    url: string;
    method: IMethod;
    data?: IData;
    header?: IHeader;
    contentType?: string;
  }
  
  export enum IStatusCode {
    OK = 200,
    Created = 201,
    Accepted = 202,
    NoContent = 204,
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    NotAcceptable = 406,
    Gone = 410,
    InternalServerError = 500,
    BadGateway = 502,
    ServiceUnavailable = 503,
    GatewayTimeout = 504
  }
  
  export interface IResponse {
    header: Record<string, any>;
    statusCode: IStatusCode;
    errMsg: string;
    data: {
      code: number;
      success: boolean;
      message: string;
      time: string;
      data: any;
    };
  }
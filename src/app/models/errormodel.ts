// Code from here: https://dev.to/arealesramirez/how-to-use-error-handler-middleware-with-express-js-and-typescript-431n#:~:text=How%20to%20Write%20a%20Custom%20Error%20Handler%20in,file.%20...%204%204.%20Test%20Custom%20Handler%20

export class CustomError {
    Error_Message!: string;
    Status!: number;

    constructor(message: string, status: number){
        this.Error_Message = message;
        this.Status = status;
    }
}
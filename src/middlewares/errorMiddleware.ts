import { Request, Response, NextFunction } from "express";

function errorHandler(error: Error | any, req: Request, res: Response, next: NextFunction){
    console.log(error);
    return res.status(500).send(`Server error: ${error}`)
}

export {
    errorHandler,
}
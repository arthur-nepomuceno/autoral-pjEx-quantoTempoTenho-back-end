import { Request, Response, NextFunction } from "express";

function errorHandler(error: Error | any, req: Request, res: Response, next: NextFunction){
    console.log(error);

    if(error.type === 'invalid_task_id') return res.status(401).send(error.message);

    return res.status(500).send(`Server error: ${error}`)
}

export {
    errorHandler,
}
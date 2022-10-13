import { ObjectSchema } from "joi";
import { Request, Response, NextFunction } from "express";

function checkSchema(schema: ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => {

        const isValid = schema.validate(req.body)

        if (isValid.error) {
            return res.status(422).send(isValid.error.message)
        }

        next(); 
    }
}


export {
    checkSchema
}
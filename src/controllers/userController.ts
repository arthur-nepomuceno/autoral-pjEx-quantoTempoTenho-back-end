import {Request, Response} from "express";
import * as userServices from "../services/userServices"

async function signUp(req: Request, res: Response){
    /*
    01 recieve data from body
    02 pass data to a service
        - a service to check if the email is available
        - a service to encrypt the password
    03 register on data base
    */

    //01
    const {name, email, password} = req.body;
    //02
    await userServices.checkEmailSignUp(email);
    
    const secret: string | any = userServices.hidePassword(password);
    //03
    const response = await userServices.createUser({name, email, password: secret})

    return response;
}

async function signIn(req: Request, res: Response) {

    const {email, password} = req.body;

    await userServices.checkEmailSignIn(email);
    await userServices.checkPassword(email, password);
    return await userServices.createToken(email);
}

export {
    signUp,
    signIn
}
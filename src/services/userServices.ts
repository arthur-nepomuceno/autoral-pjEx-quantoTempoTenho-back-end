import * as userRepository from "../repositories/userRepository";
import { IUserData } from "../types/userTypes";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

async function checkEmailSignUp(email: string) {
    /*
        - search for the email at the data base
        - if there is a register, then the email is unavailable 
        and an error must be thrown
        - if there is not, the funcion returns .
    */

    const register = await userRepository.findUserByEmail(email);    
    if(register) throw {
        type: 'invalid_email',
        message: 'The email you are trying to register already exists.'
    }
    return;
}

async function checkEmailSignIn(email: string) {

    const register = await userRepository.findUserByEmail(email);    
    if(!register) throw {
        type: 'invalid_email',
        message: 'This email is not registered. Please, signup first.'
    }
    return;
}

async function createUser(user: IUserData) {
    /*
        register data at the data base
        returns register
    */

    await userRepository.createUser(user);
    const register = await userRepository.findUserByEmail(user.email);
    return register;

}

async function hidePassword(password: string) {
    /*
        - use bcrypt to encrypt the password
        - returns at the end
    */

    const secret = bcrypt.hashSync(password, 13);
    return secret;
}

async function checkPassword(email: string, password: string) {
    /*
        returns true if passwords match and false if they don't.
    */

    const register: string | any = await userRepository.findUserByEmail(email);
    return bcrypt.compareSync(password, register?.password)
}

async function createToken(email: string) {
    /*
        create a token with user id
        returns token
    */

    const register: string | any = await userRepository.findUserByEmail(email);
    const jwt_secret: string | any = process.env.JWT_SECRET;
    const token = jwt.sign(register?.id, jwt_secret)
    return token
    
}

export {
    checkEmailSignUp,
    checkEmailSignIn,
    createUser,
    hidePassword,
    checkPassword,
    createToken
}
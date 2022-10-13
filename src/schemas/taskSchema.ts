import Joi from "joi";

export const taskSchema = Joi.object({
    title: Joi.string().required(),
    days: Joi.number().required(),
    hours: Joi.number().required(),
    limit: Joi.date().required()
})
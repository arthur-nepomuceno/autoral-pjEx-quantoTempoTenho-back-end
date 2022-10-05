import Joi from "joi";

export const taskSchema = Joi.object({
    title: Joi.string().required(),
    timeSpam: Joi.number().required(),
    deadline: Joi.number().required()
})
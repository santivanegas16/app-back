import joi from 'joi-oid'

const schema = joi.object({
    name: joi.string().required().min(5).max(48).messages({
        "string.empty" : "Name is not allowed to be empty",
        "any.required" : "Name is required",
        "string.min" : "Name must be at least 5 characters long",
        "string.max" : "Name must be a maximum of 48 characters long",
    }),
    logo: joi.string().uri().required().messages({
        "string.empty" : "Logo is not allowed to be empty",
        "any.required" : "Logo is required",
        "string.uri" : "Logo must be a valid URL"
    }),
    website: joi.string().uri().required().messages({
        "string.empty" : "Website is not allowed to be empty",
        "any.required" : "Website is required",
        "string.uri" : "Website must be a valid URL",
    }),
    description: joi.string().required().min(5).max(255).messages({
        "string.empty" : "Name is not allowed to be empty",
        "any.required" : "Name is required",
        "string.min" : "Description must be at least 5 characters long",
        "string.max" : "Description must be a maximum of 255 characters long",
    }),
    active: joi.boolean().messages({
        "boolean.base" : "Active must be a boolean",
    }),
    user_id: joi.objectId().messages({
        "any.required" : "User is required",
    }),
})

export default schema
import joi from 'joi-oid'

const schema = joi.object({
    name: joi.string().required().min(5).max(48).messages({
        "any.required" : "Name is required",
        "string.empty" : "Name is required",
        "string.min" : "Name must be at least 5 characters long",
        "string.max" : "Name must be a maximum of 48 characters long",
        "string.base" : "Name must be a string",
    }),
    logo: joi.string().uri().required().messages({
        "any.required" : "Logo is required",
        "string.empty" : "Logo is required",
        "string.uri" : "Logo must be a valid URL",
        "string.base" : "Logo must be a string",
    }),
    website: joi.string().uri().required().messages({
        "any.required" : "Website is required",
        "string.empty" : "Website is required",
        "string.uri" : "Website must be a valid URL",
        "string.base" : "Website must be a string",
    }),
    description: joi.string().required().min(5).max(255).messages({
        "any.required" : "Description is required",
        "string.empty" : "Description is required",
        "string.min" : "Description must be at least 5 characters long",
        "string.max" : "Description must be a maximum of 255 characters long",
        "string.base" : "Description must be a string",
    }),
    active: joi.boolean().messages({
        "boolean.base" : "Active must be a boolean",
    }),
    user_id: joi.objectId().messages({
        "any.required" : "User is required",
    }),
})

export default schema
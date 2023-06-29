import joi from 'joi-oid'

const schema = joi.object({
    author_id: joi.objectId(),
    company_id: joi.objectId(),
    title: joi.string(),
    cover_photo: joi.string().uri(),
    description:joi.string(),
    category_id: joi.objectId()
   
})

export default schema
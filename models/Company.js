import {Schema, model} from 'mongoose'

let collection = 'companies'

let schema = new Schema ({
    name: {type: String, required: true},
    website: {type: String},
    profile_photo: {type: String},
    description: {type: String, required: true}
},{
    timestamps: true
})

let Company = model(collection, schema)
export default Company
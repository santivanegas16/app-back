import {Schema, model, Types} from 'mongoose'

let collection = 'companies'

let schema = new Schema ({
    name: {type: String, required: true},
    logo: {type: String, required:true},
    website: {type: String, required:true},
    description: {type: String, required: true},
    active: {type:Boolean, default:false},
    user_id: {
        type: Types.ObjectId,
        ref: 'users',
        required: true
    }
},{
    timestamps: true
})

let Company = model(collection, schema)
export default Company
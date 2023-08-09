import {Schema, model, Types} from 'mongoose'

let collection = 'comments'

let schema = new Schema ({
    name: {type: String, required: true},
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

let Comment = model(collection, schema)
export default Comment
import { Schema, model, Types } from 'mongoose'

let collection = 'comments'

let schema = new Schema({
    description: { type: String, required: true },
    chapter_id: {
        type: Types.ObjectId,
        ref: "chapters",
        required: true
    },
    user_id: {
        type: Types.ObjectId,
        ref: "users",
        required: true
    }
}, {
    timestamps: true
})

let Comment = model(collection, schema)
export default Comment
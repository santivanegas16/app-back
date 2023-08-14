import { Schema, model, Types } from "mongoose"

let collection = "reactions"

let schema = new Schema({
    name: { type: String, required: true },
    manga_id: { type: Types.ObjectId, required: true },
    user_id: { type: Types.ObjectId,required: true},
}, {
    timestamps: true
})

let Reaction = model(collection, schema)
export default Reaction
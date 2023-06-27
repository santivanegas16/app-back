import { Schema, model, Types } from "mongoose"

let collection = "users"

let schema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    photo: { type: String, default: 'https://w7.pngwing.com/pngs/741/68/png-transparent-user-computer-icons-user-miscellaneous-cdr-rectangle-thumbnail.png' },
    role: { type: Number, default: 0 },
    online: { type: Boolean, default: false },
}, {
    timestamps: true
})

let User = model(collection, schema)
export default User
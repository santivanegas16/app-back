import { Schema, model, Types} from "mongoose"

let collection = "authors"

let schema = new Schema({
    name: {type: String, required: true},
    last_name:{type: String, required: false}, //por default el required esta en false se puede evitar ponerlo
    city:{type: String, required: true},
    country:{type: String, required: true},
    date:{type: Date},
    photo:{type: String, required: true},
    user_id:{
        type: Types.ObjectId,   // tipo de dato especial de mongo que es un string con propiedades extensivas de objetos
        ref:"users",  // nombre de la collection con la que se tiene que relacionar
        required: true},
    active:{ type: Boolean, default: false}
},{
    timestamps: true
})

let Author = model(collection,schema)
export default Author
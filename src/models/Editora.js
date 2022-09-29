import mongoose from "mongoose";

const editoraSchema = new mongoose.Schema(
    {
        id: {type: String},
        nomeEd: {type: String, required: true},
        Estado: {type: String}
    },
    {
        versionKey: false
    }
)

const editoras = mongoose.model("editoras", editoraSchema);

export default editoras;
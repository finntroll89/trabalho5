const banco = require("./conexao");

const EditoraSchema = new banco.Schema({
    _id: banco.Schema.Types.ObjectId,
    nome: String,
    codEditora: Number,
})

const Editora = banco.model("editoras", EditoraSchema);
module.exports = Editora;
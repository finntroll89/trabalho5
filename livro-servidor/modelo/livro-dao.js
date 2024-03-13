const Livro = require('../modelo/livro-shema');

const obterLivros = async () => {
    return Livro.find()
}

const incluir = async (livro) => {
    await  Livro.create(livro)

}

const excluir = async (codigo) => {
    await Livro.deleteOne({_id:codigo})
}

module.exports = {
    obterLivros,
    incluir,
    excluir
}
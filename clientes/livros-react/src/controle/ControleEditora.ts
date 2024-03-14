import Editora from "../modelo/Editora";

const edts: Editora[] = [
    (new Editora(1,'Edições Estrela do Norte')),
    (new Editora(2,'Livros Alvorada Cultural')),
    (new Editora(3,'Editora Céu Aberto')),

]

class ControleEditora {
    getNomeEditora(codEditora: number): string {
        const editorapequisada = edts.filter((edt) => edt.codEditora === codEditora);
        return editorapequisada.length > 0 ? editorapequisada[0].nome : 'Desconhecida';
    }

    getEditoras(): Array<Editora> {
        return edts;
    }

    incluir(edt: Editora):void{
        const codNew = edts.length > 0 ?
            Math.max(...edts.map(e => e.codEditora)) + 1:
            1;
        edt.codEditora = codNew;
        edts.push(edt);
    }
}

export default ControleEditora
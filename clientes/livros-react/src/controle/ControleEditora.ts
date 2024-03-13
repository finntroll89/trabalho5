import Editora from "../modelo/Editora";

const edts: Editora[] = [
    (new Editora(1,'Editora teste 01')),
    (new Editora(2,'Editora teste 02')),
    (new Editora(3,'Editora teste 03')),

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
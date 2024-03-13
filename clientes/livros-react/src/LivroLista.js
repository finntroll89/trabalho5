import React, {useEffect, useState} from "react";
import ControleLivros from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";
import './LivroLista.css'
import Header from "./component/Header";

const controleLivros = new ControleLivros();
const editora = new ControleEditora();

//Component cria linha de livros, eu ia coloca externo, mas no pedido do trabalho não fala nada!
function LinhaLivro({livro, excluir}) {
    return (<tr>
        <td>
            <div className='mb-2'>{livro.titulo}</div>
            <button className="btn btn-danger" onClick={() => {
                excluir(livro.codigo);
            }}>Excluir
            </button>
        </td>
        <td>{livro.resumo}</td>
        <td>{editora.getNomeEditora(livro.codEditora)}</td>
        <td>
            <ul className='pl-5'>
                {livro.autores.map((autor, index) => (<li key={index}>{autor}</li>))}
            </ul>
        </td>
    </tr>);
}

export default function LivroLista() {
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregando] = useState(false);


    useEffect( () => {
        document.title = "Lista de Livros";
        controleLivros.obterLivros().then((livros)=>{
            setLivros(livros);
            setCarregando(true);
        })
            .catch((error) => {
                console.error("Erro ao Carregar os livros:", error);
                setCarregando(true);
            });

    }, []);


    const excluirlivro = (codigo) => {
        setCarregando(false);
        controleLivros.excluir(codigo).then(()=>{
            controleLivros.obterLivros().then((livros)=>{
                setLivros(livros)
            })
        })
        setCarregando(true);
    };

    return (
        <>
            <Header/>
            <main className='container'>
                {!carregado && (<div className="load">
                    <div className="load_box">
                        <div className="load_box_circle"></div>
                        <p className="load_box_title">Aguarde, carregando...</p>
                    </div>
                </div>)}
                <h1>Catálogo de Livros</h1>
                <table className="table table-striped">
                    <thead className="table-dark">
                    <tr>
                        <th scope="col">Titulo</th>
                        <th scope="col">Resumo</th>
                        <th scope="col">Editora</th>
                        <th scope="col">Autores</th>
                    </tr>
                    </thead>
                    <tbody>
                    {livros.map((livro,index) => (<LinhaLivro key={index} livro={livro} excluir={excluirlivro}/>))}
                    </tbody>
                </table>
            </main>
        </>
    );
}

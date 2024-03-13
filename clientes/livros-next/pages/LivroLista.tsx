import type {NextPage} from "next";
import React, { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import { LinhaLivro } from "@/components/LinhaLivro";
import controleLivros from "@/classes/controle/ControleLivros";
import Livros from "../classes/modelo/Livros";


const baseURL = "http://localhost:3030/livros"

const LivroLista: NextPage = () => {
    const [livros, setLivros] = useState<Array<Livros>>([])
    const [carregado, setCarregado] = useState(false);


    const obterLivros = async () => {
        return await fetch(baseURL)
            .then((resposta) => resposta.json())
            .then((resposta) => resposta);
    }
    const excluirLivro = async (codigo: string) => {
        setCarregado(false);
        await controleLivros.excluir(codigo)
        setLivros(await controleLivros.obterLivros());
        setCarregado(true);

    }

    useEffect(() => {
        const carregaLivros = async () => {
            setLivros(await controleLivros.obterLivros());
            setCarregado(true)
            return livros;
        };

        carregaLivros();
    }, []);


    return (
        <div className={styles.conteiner}>
            <Head>
                <title>Loja Next | Catálago</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            
            <main className='container'>
                {!carregado && (<div className={styles.load}>
                    <div className={styles.load_box}>
                        <div className={styles.load_box_circle}></div>
                        <p className={styles.load_box_title}>Aguarde, carregando...</p>
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
                        {livros.map((livro, index) => (<LinhaLivro key={index} livro={livro} excluir={excluirLivro}/>))}
                    </tbody>
                </table>
            </main>
        </div>
    );
}
export default LivroLista;

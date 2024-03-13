import type {NextPage} from "next";
import React, { useState } from "react";
import {router} from "next/client";
import styles from '@/styles/Home.module.css'
import controleLivros from "../classes/controle/ControleLivros";
import ControleEditora from "../classes/controle/ControleEditora";
import { useRouter } from "next/router";
import Livro from "@/classes/modelo/Livros";

const controleEditora = new ControleEditora()


const LivroDados: NextPage = () => {

    //metodo que pega o array de editora e modifica colocando value e text
    const opcoes = controleEditora.getEditoras().map((editora) => ({
        value: editora.codEditora,
        text: editora.nome
    }));
    //Defini as States inicial
    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState(opcoes[0].value);


    //redirecionar
    const navigate = (pagina: string) => router.push(pagina);

    const tratarCombo = (evento: any) => {
        const numerointeiro = parseInt(evento.target.value)
        setCodEditora(numerointeiro)
    }

    const incluir = (evento: any) => {
        evento.preventDefault();
        const livro = {
            _id: null,
            codEditora: codEditora,
            titulo: titulo,
            resumo: resumo,
            autores: autores.split("\n")
        };

        incluirLivro(livro);
    };

    const incluirLivro = async (livro: any) => {
        controleLivros.incluir(livro)
            .then(()=>{
                navigate("/LivroLista")
            })
    };

  return (
    <div className="container">
    <main>        
      <div className="container">
        <h1 className="text-center mt-4">Incluir Livro</h1>
        <form onSubmit={incluir} className=" mt-4">
          <div className="mb-3">
            <label htmlFor="titulo" className="form-label">
              Título
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="resumo" className="form-label">
              Resumo
            </label>
            <textarea
              required
              className="form-control"
              id="resumo"
              value={resumo}
              onChange={(e) => setResumo(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="autores" className="form-label">
              Autores (separados por linha)
            </label>
            <textarea
              required
              className="form-control"
              id="autores"
              value={autores}
              onChange={(e) => setAutores(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="codEditora" className="form-label">
              Editora
            </label>
            <select
              required
              className="form-select"
              id="codEditora"
              value={codEditora}
              onChange={tratarCombo}
            >
              {opcoes.map((opcao) => (
                <option key={opcao.value} value={opcao.value}>
                  {opcao.text}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Incluir Livro
          </button>
        </form>
      </div>
    </main>
    </div>
  );
};

export default LivroDados;

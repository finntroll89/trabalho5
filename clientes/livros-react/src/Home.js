import React, { useEffect, useState } from "react";
import './LivroLista.css'
import Header from "./component/Header";


export default function Home() {
    return (
        <>
            <Header />
            <main className='containerHome'>
                <h1>Página Inicial</h1><br/>
                <h2>LIVROS-REACT</h2><br/>
                <p><h2>Sistema de Gerenciamento de Livros - Banco de dados - Mongodb</h2></p>

        </main >
        </>
    );
}

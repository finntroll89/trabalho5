import React, { useEffect, useState } from "react";
import './LivroLista.css'
import Header from "./component/Header";
import Image from "../src/assets/react.png";

export default function Home() {
    return (
        <>
            <Header />
            <main className='containerHome'>
                <h1>Página Inicial</h1><br />
                <img src={Image} />

                <h2>Sistema de Gerenciamento de Livros - Banco de dados - Mongodb</h2>

        </main >
        </>
    );
}

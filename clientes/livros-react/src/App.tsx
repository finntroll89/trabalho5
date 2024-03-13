import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LivroLista from "./LivroLista";
import LivroDados from "./LivroDados";
import EditoraDados from "./EditoraDados";
import Home from './Home';


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/livrolista' element={<LivroLista/>}/>
              <Route path='/novo' element={<LivroDados/>}/>
              <Route path='/cadastroeditora' element={<EditoraDados/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;

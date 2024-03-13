import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LivroListaComponent} from "./livro-lista/livro-lista.component";
import {LivroDadosComponent} from "./livro-dados/livro-dados.component";
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'lista', component:LivroListaComponent},
  {path:'dados', component:LivroDadosComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

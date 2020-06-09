import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { GameComponent } from './views/game/game.component';
import { CategoriasComponent } from './views/categorias/categorias.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'game', component: GameComponent },
  { path: 'categorias', component: CategoriasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

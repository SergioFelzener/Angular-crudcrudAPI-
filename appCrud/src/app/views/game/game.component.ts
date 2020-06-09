import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Game } from 'src/app/model/game';
import { GameService } from 'src/app/services/game.service';


interface Categoria {
  name: string;
}


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  games: Game[];
  colunas = ['titulo', 'plataforma', 'fabricante', 'categoria', 'status','fabricacao', 'acao'];

  categoriaControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  categorias: Categoria[] = [
    {name: 'Ação'},
    {name: 'Estratégia'},
    {name: 'Esportes'},
    {name: 'RPG'},
    {name: 'Puzzle'},
    {name: 'Simulador'},
  ];





  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.list();
  }

  list(){
    this.gameService.listGames().subscribe(games => {
      this.games = games;
    });
  }

  delete(id: string) {
    this.gameService.deleteGame(id).subscribe(() => {
      alert('Game Removido');
      this.list();
    });

  }



}

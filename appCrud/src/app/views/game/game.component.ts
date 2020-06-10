import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Game } from 'src/app/model/game';
import { GameService } from 'src/app/services/game.service';
import Categoria from 'src/app/model/Categoria'
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  games: Game[];
  colunas = ['titulo', 'plataforma', 'fabricante', 'categoria', 'status', 'fabricacao', 'acao'];
  gameSelecionado: Game;
  inserindo = false;

  categoriaControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  gameForm = new FormControl('', Validators.required);
  categorias: Array<Categoria> = []

  constructor(
    private gameService: GameService,
    private categoriaService: CategoriaService
    ) { }

  ngOnInit(): void {
    this.list();
    this.getCategorias()
  }

  list() {
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
  cancelar() {
    this.gameSelecionado = null;
  }

  selecionar(game: Game) {
    this.inserindo = false;
    this.gameSelecionado = game;
  }
  salvar() {
    if (this.inserindo) {
      this.gameService.insertGame(this.gameSelecionado).subscribe(() => {
        alert('Game inserido');
        this.list();
        this.cancelar();
      });
    } else {
      this.gameService.updateGame(this.gameSelecionado).subscribe(() => {
        alert('Game atualizado');
        this.list();
        this.cancelar();
      });
      
    }
  }
  novoGame() {
    this.inserindo = true;
    this.gameSelecionado = new Game();
  }

  getCategorias(): void {
    this.categoriaService.read().forEach(categoria => {
      this.categorias.push(categoria)
    })
  }


}

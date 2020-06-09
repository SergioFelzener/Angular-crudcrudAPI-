import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../model/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  listGames(): Observable<Game[]> {
    return this.http.get<Game[]>('https://crudcrud.com/api/b4ef9c814a2a451b84058e4a7b2135e1/game');
  }

  insertGame(game: Game): Observable<Game> {
    return this.http.post<Game>('https://crudcrud.com/api/b4ef9c814a2a451b84058e4a7b2135e1/game', game);
  }

  updateGame(game: Game): Observable<any> {
    return this.http.put('https://crudcrud.com/api/b4ef9c814a2a451b84058e4a7b2135e1/game/' + game._id, game);
  }

  deleteGame(id: string): Observable<any> {
    return this.http.delete('https://crudcrud.com/api/b4ef9c814a2a451b84058e4a7b2135e1/game/' + id);
  }


}

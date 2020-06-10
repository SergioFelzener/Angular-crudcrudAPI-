import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../model/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  listGames(): Observable<Game[]> {
    return this.http.get<Game[]>('https://crudcrud.com/api/73324a9ab327483ca5e2cd1044ae8026/game');
  }

  insertGame(game: Game): Observable<Game> {
    return this.http.post<Game>('https://crudcrud.com/api/73324a9ab327483ca5e2cd1044ae8026/game', game);
  }

  updateGame(game: Game): Observable<any> {
    let id = game._id;
    delete game._id;
    return this.http.put('https://crudcrud.com/api/73324a9ab327483ca5e2cd1044ae8026/game/' + id, game);
  }

  deleteGame(id: string): Observable<any> {
    return this.http.delete('https://crudcrud.com/api/73324a9ab327483ca5e2cd1044ae8026/game/' + id);
  }


}

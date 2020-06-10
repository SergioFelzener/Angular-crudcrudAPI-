import { Injectable } from '@angular/core';
import Categoria from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  public categorias: Array<Categoria> = []

  constructor() { }

  create(categoria: Categoria): void {
    this.categorias.push(categoria)
    localStorage.setItem('categorias', JSON.stringify(this.categorias))

  }

  read(): Array<Categoria> {
    this.categorias = JSON.parse(localStorage.getItem('categorias'))

    if(this.categorias == null) 
      this.categorias = []

    return this.categorias
  }

  update(categoria: Categoria): void {
    for(let i = 0; i < this.categorias.length; i++){
      if(this.categorias[i].id == categoria.id){
        this.categorias.splice(i, 1)
        this.categorias.push(categoria)
      }

    }

    localStorage.setItem('categorias', JSON.stringify(this.categorias))
  }

  delete(id: string): void {
    for(let i = 0; i < this.categorias.length; i++){
      if(this.categorias[i].id == id){
        this.categorias.splice(i, 1)
      }
    }

    localStorage.setItem('categorias', JSON.stringify(this.categorias))

  }

}

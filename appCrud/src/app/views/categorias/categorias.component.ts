import { Component, OnInit } from '@angular/core';
import Categoria from 'src/app/model/Categoria';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CategoriaService } from 'src/app/services/categoria.service';
import { DialogUpdateComponent } from '../dialog-update/dialog-update.component';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias: Array<Categoria> = []
  displayedColumns: string[] = ['id', 'name', 'editar', 'deletar'];
  dataSource = this.categorias

  name: string;

  constructor(
    public dialog: MatDialog,
    private categoriaService: CategoriaService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {name: this.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogUpdate(): void {
    const dialogRef = this.dialog.open(DialogUpdateComponent, {
      width: '250px',
      data: {name: this.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  } 

  ngOnInit(): void {
    this.read()
  }

  read() : void {
    this.categoriaService.read().forEach(categoria => {
      this.categorias.push(categoria)
    })
  }

  update(id: string) : void {
    localStorage.setItem('categoria-edit', id)
    this.openDialogUpdate()
  }

  delete(id: string) : void {
    this.categoriaService.delete(id)
  }

}

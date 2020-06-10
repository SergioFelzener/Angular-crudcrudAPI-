import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoriaService } from 'src/app/services/categoria.service';
import Categoria from 'src/app/model/Categoria';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  name: string = ''

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private categoriaService: CategoriaService) {}

  ngOnInit(): void {
  }

  criarCategoria(): void {

    let categoriaNova = new Categoria(this.name)
    this.categoriaService.create(categoriaNova)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

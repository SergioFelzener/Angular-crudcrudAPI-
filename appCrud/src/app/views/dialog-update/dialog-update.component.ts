import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoriaService } from 'src/app/services/categoria.service';
import Categoria from 'src/app/model/Categoria';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-dialog-update',
  templateUrl: './dialog-update.component.html',
  styleUrls: ['./dialog-update.component.css']
})
export class DialogUpdateComponent implements OnInit {

  id: string = localStorage.getItem('categoria-edit')
  name: string = ''

  constructor(
    public dialogRef: MatDialogRef<DialogUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private categoriaService: CategoriaService) {}

  ngOnInit(): void {
  }

  updateCategoria(): void {
    let categoriaEditada = new Categoria(this.name)
    categoriaEditada.id = this.id
    this.categoriaService.update(categoriaEditada)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

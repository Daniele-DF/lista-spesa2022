import { DataService } from './../../../service/data.service';
import { Component, OnInit } from '@angular/core';
import { ICategorie } from '../../../models/interface';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.scss']
})
export class ProvaComponent implements OnInit {

  constructor(private dataService: DataService) { }

  categorie: ICategorie[] | undefined;

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData(){
    return this.dataService.getAllData().subscribe(data => {this.categorie = Object.values(data.categorie)});
  }

}

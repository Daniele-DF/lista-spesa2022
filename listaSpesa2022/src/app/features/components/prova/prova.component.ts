import { DataService } from './../../../service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.scss']
})
export class ProvaComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData(){
    return this.dataService.getAllData().subscribe(data => console.log(data));
  }

}

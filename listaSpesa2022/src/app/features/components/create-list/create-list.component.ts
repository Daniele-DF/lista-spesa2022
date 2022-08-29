import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.scss']
})
export class CreateListComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  back(){
    this.route.navigateByUrl('/myLists')

  }

  addNewList(){
    this.route.navigateByUrl('/list')
  }

}

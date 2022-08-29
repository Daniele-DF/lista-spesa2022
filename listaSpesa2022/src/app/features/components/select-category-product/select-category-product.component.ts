import { Collections, ICategorie, IdCategorie } from './../../../models/interface'
import { ICategories } from './../../../models/categories'
import { DataService } from './../../../service/data.service'
import { Component, OnInit } from '@angular/core'
import { tap,take, toArray, filter } from 'rxjs/operators';

@Component({
  selector: 'app-select-category-product',
  templateUrl: './select-category-product.component.html',
  styleUrls: ['./select-category-product.component.scss']
})
export class SelectCategoryProductComponent implements OnInit {

  data: any[] = [];

  categorie: any[] = [];




  categories : ICategorie | null = null;

  idCategory: IdCategorie[] = [];

  nameCategory: IdCategorie | null | string = null;


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getAllCategories();
  }


  getAllCategories(){
    return this.dataService.getAllData().pipe(
      toArray(),
      tap(e => console.log('e',e[0]))
    )

    .subscribe(data => {
      console.log('data',data);
      this.data = data;
      console.log(data[0]);

     // console.log('categorie',this.categories = data[0]?.categorie);
     // console.log('nome',this.nameCategory = data[0]?.categorie.id);
    })
  }

}

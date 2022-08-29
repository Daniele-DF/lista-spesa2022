import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateListComponent } from './features/components/create-list/create-list.component';
import { ListComponent } from './features/components/list/list.component';
import { MyListsComponent } from './features/components/my-lists/my-lists.component';
import { ProvaComponent } from './features/components/prova/prova.component';
import { SelectCategoryProductComponent } from './features/components/select-category-product/select-category-product.component';

const routes: Routes = [
  {path: '', component: MyListsComponent},
  {path: '__collections__' , component: ProvaComponent},
  {path: 'createList', component: CreateListComponent},
  {path: 'myLists', component: MyListsComponent},
  {path: 'list', component: ListComponent},
  {path:'selectProduct', component: SelectCategoryProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

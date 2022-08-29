import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateListComponent } from './features/components/create-list/create-list.component';
import { ListComponent } from './features/components/list/list.component';
import { MyListsComponent } from './features/components/my-lists/my-lists.component';
import { ProvaComponent } from './features/components/prova/prova.component';
import { SelectCategoryProductComponent } from './features/components/select-category-product/select-category-product.component';

const routes: Routes = [
  {path: '__collections__' , component: ProvaComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

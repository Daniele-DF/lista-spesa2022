import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ProvaComponent } from './features/components/prova/prova.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateListComponent } from './features/components/create-list/create-list.component';
import { MaterialModule } from './shared/material/material.module';
import { MyListsComponent } from './features/components/my-lists/my-lists.component';
import { ListComponent } from './features/components/list/list.component';
import { SelectCategoryProductComponent } from './features/components/select-category-product/select-category-product.component';


@NgModule({
  declarations: [
    AppComponent,
    ProvaComponent,
    CreateListComponent,
    MyListsComponent,
    ListComponent,
    SelectCategoryProductComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

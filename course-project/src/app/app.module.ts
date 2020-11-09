import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list-module/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list-module/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { ReceipeListComponent } from './receipe-book-module/receipe-list/receipe-list.component';
import { ReceipeItemComponent } from './receipe-book-module/receipe-list/receipe-item/receipe-item.component';
import { ReceipeDetailComponent } from './receipe-book-module/receipe-detail/receipe-detail.component';
import { HeaderComponent } from './header/header.component';
import { ReceipesComponent } from './receipe-book-module/receipes.component';
import { ShoppingsComponent } from './shopping-list-module/shoppings.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    ReceipeListComponent,
    ReceipeItemComponent,
    ReceipeDetailComponent,
    HeaderComponent,
    ReceipesComponent,
    ShoppingsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

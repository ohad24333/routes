import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { DogsComponent } from './components/dogs/dogs.component';
import { CatsComponent } from './components/cats/cats.component';
import { FoxComponent } from './components/fox/fox.component';
import { MenuComponent } from './components/menu/menu.component';

const webRoutes:Routes = [
  {path:'',component:DogsComponent},
  {path:'dogs',component:DogsComponent},
  {path:'cats',component:CatsComponent},
  {path:'foxes',component:FoxComponent},
  
];

@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    CatsComponent,
    FoxComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(webRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

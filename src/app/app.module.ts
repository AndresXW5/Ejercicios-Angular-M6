import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroeComponent } from './heroes/Heroe/heroe.component';
import { ListadoComponent } from './heroes/Listado/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroeComponent,
    ListadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

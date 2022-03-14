import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { acumuladorModule } from './acumulador/acumulador.module';
import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';
import { heroesModule } from './heroe/heroe.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    heroesModule,
    acumuladorModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

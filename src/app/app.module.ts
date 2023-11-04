import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CrearTarjetaComponent } from './components/crear-tarjeta/crear-tarjeta.component';
import { ListarTarjetaComponent } from './components/listar-tarjeta/listar-tarjeta.component';
import {AngularFireModule} from  '@angular/fire/compat';
import {AngularFirestoreModule} from  '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
//import { ToastModule, ToastsManager } from 'ng2-toastr';
//import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CrearTarjetaComponent,
    ListarTarjetaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,          //agrego modulo para formularios reactivos
    AngularFireModule.initializeApp(environment.firebaseConfig),             //Agregamos modulo para usar firebase
    AngularFirestoreModule       //Agregamos modulo para usar firebase
   // ToastModule.forRoot(),          //Se agrega para usar ng2-toastr
   // BrowserAnimationsModule
  ],
  providers: [],  //Agragamos el servicio 
  bootstrap: [AppComponent]
})
export class AppModule { }

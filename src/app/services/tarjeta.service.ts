import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { promises } from 'dns';
import { Observable } from 'rxjs/internal/Observable';
import { TarjetaCredito } from '../models/tarjeta';


@Injectable({
  providedIn: 'root'
})
export class TarjetaService {


//Inyectamos la clase del modulo firestone
  constructor(private firestore:AngularFirestore) { }

//Creamos metodo para insertar en firestore con promesa usando el modelo TarjetaCredito retorna las tarjetas
  guardarTarjeta(tarjeta:TarjetaCredito):Promise<any>
  {
    return  this.firestore.collection('tarjetas').add(tarjeta)
   }

   
  //Creamos el metodo para listar las tarjetas que vienen desde firestore
  listarTarjetas():Observable<any>
  {
    return this.firestore.collection("tarjetas").snapshotChanges();
  }


  
//Creamos metodo Eliminar para eliminar las tarjetas de la lista y base datos
//Pasamos el id del registro a eliminar.
eliminarTarjetas(id:string):Promise<any>
{

return  this.firestore.collection('tarjetas').doc(id).delete();

}

}

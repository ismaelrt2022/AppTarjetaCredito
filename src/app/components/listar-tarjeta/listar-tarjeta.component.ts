import { Component, OnInit } from '@angular/core';
import { TarjetaService } from '../../services/tarjeta.service';
import { TarjetaCredito } from '../../models/tarjeta';

@Component({
  selector: 'app-listar-tarjeta',
  templateUrl: './listar-tarjeta.component.html',
  styleUrls: ['./listar-tarjeta.component.css']
})
export class ListarTarjetaComponent implements OnInit {

  //Inyectamoas servicio para obtener metoso de listado de tarjetas
  constructor(private _tarjetaService:TarjetaService) { }

//Creamos array para guardar el listado que viene de la base datos
listadoTarjetas:TarjetaCredito[]=[];


  ngOnInit(): void {
          //invocamos funcion para la cargar desde la carga inicial de la pagina
          this.listarTarjetas();   
  }


  //Metodo para consultar todos los registros al cargar pagina
  listarTarjetas(){
        this._tarjetaService.listarTarjetas().subscribe( res=>{
        console.log(res);
        this.listadoTarjetas=[];
        //Recorremos tosdos los documentos o informacion guardada en la base datos firestore   
            res.forEach((Element:any) => {       
                  //LLenamos el array con la informacion  que viene de la base datos
                this.listadoTarjetas.push({
                    id:Element.payload.doc.id,...Element.payload.doc.data()

            })
              console.log(Element.payload.doc.id);
              console.log(Element.payload.doc.data());
        });
   })
   console.log(this.listadoTarjetas);
  }

 //Meoto para borrar registro de la base datos  recibe id a elimnar de tipo string
 eliminarTarjeta(id:any){
  
  this._tarjetaService.eliminarTarjetas(id).then(()=>{     //Usando promesa
      // this.toastr.error("Tarjeta eliminada de la base de datos","Regitro eliminado");
      console.log("Tarjeta Elminada"+id);
  },error=>{
       console.log(error);
  })
 } 
  
 

}

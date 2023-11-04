//import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TarjetaCredito } from '../../models/tarjeta';
import { TarjetaService } from '../../services/tarjeta.service';
//import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-crear-tarjeta',
  templateUrl: './crear-tarjeta.component.html',
  styleUrls: ['./crear-tarjeta.component.css']
})
export class CrearTarjetaComponent implements OnInit {
  
  //Creacion de varible form
  forms:FormGroup;
//Creacion de variable de loading en false
loading:boolean=true;

 //inyectar clase FormBuilder para usar en formulario     <form [formGroup]="forms">
 //inyectamos el servicio para almacenar en base de datos firestore
 //Inyectar el servicio para usar toastr
  constructor(
                private fb:FormBuilder,
                private _tarjetaService:TarjetaService
            //    private _toastr:ToastsManager
                ) {

    this.forms =this.fb.group({
                    titular:['',Validators.required],
                    nroTarjeta:['',Validators.compose([Validators.required,Validators.minLength(16),Validators.maxLength(16)])],
                    fechaExpiracion:['',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(5)])],
                    cvv:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(3)])]
        
    })
  }
  ngOnInit(): void {
  }

  crearTarjeta(){
    console.log(this.forms);

    this.loading=true;
    //Usamos la clase  Modelo creado para guardar la informacion del formulario reactivo 
    const CREAR_TARJETA:TarjetaCredito={
                  titular:this.forms.value.titular,
                  numeroDeTarjeta:this.forms.value.nroTarjeta,
                  cvv:this.forms.value.cvv,
                  fechaActualizacion:new Date,
                  fechaCreacion:new Date,
                  fechaExpiracion:this.forms.value.fechaExpiracion
    }
 console.log(CREAR_TARJETA);

  this._tarjetaService.guardarTarjeta(CREAR_TARJETA).then(()=>{
           this.forms.reset();
           this.loading=false;
        //   this._toastr.success("Tarjeta Registrada con exito","Tarjeta registrada");
                console.log("Tarjeta Registrada....ok");
 },error=>{
           this.loading=false;
                console.log(error);
          //    this._toastr.success("Ocurrio un Error al registrar","Error");
 }) 

  }



}

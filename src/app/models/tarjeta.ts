import { TarjetaService } from '../services/tarjeta.service';


//Creacion de clase Modelo 
export class TarjetaCredito{

    id?:string;
    titular:string;
    numeroDeTarjeta:string;
    fechaExpiracion:Date;
    cvv:number;
    fechaCreacion:Date;
    fechaActualizacion:Date;

    constructor(titular:string,numeroTarjeta:string,cvv:number){
        this.titular=titular;
        this.numeroDeTarjeta=numeroTarjeta;
        this.cvv=cvv;
        this.fechaExpiracion=new  Date();
        this.fechaCreacion=new Date();
        this.fechaActualizacion=new Date();



    }

}
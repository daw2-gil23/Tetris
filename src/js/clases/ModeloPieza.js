import { models } from "../models.js"

export class ModeloPieza {
    constructor(numero){
        this.modelo = numero
        this.angulo = 0
        this.matriz = [models[this.modelo].matriz[0],this.angulo] 
        this.x = 0
        this.y = 0
        this.longitud = this.matriz[0][0].length
        this.altura = this.matriz[0].length

        console.log(this.matriz)
        console.log("longitud: " + this.longitud)
        console.log("altura: " + this.altura)
    }

    girar = () =>{
        if(this.angulo==3){
            this.angulo = 0
        }else{
            this.angulo++
        }
    }
}
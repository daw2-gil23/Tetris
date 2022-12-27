import { ModeloPieza } from "./clases/ModeloPieza"
import { models } from "./models.js"

export const panel={
    matriz:[
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1],
    ],
    nuevaPieza: "",
    pintapanel: ()=>{
        let html=``
        for(var y=1;y<panel.matriz.length-1;y++){
            html+=`<div class="p-fila">`
            for(var x=1; x<panel.matriz[y].length-1;x++){
                if(panel.matriz[y][x]===1){
                    html+= `
                    <div class="celda bg-success">${panel.matriz[y][x]}</div>
                    `
                }else{
                    html+= `
                    <div class="celda">${panel.matriz[y][x]}</div>
                    `
                }
            }
            html+=`</div>`
        }

        document.querySelector('#panel').innerHTML = html
    },
    crearNuevaPieza: ()=>{

        //let modelAleatorio =  Math.round(Math.random())

        panel.nuevaPieza = new ModeloPieza(0)

        let xAleatorio =  Math.ceil(Math.random()*(10-panel.nuevaPieza.longitud))

        panel.nuevaPieza.x = xAleatorio
        
    },
    insertarPieza: ()=>{

        var posicion = panel.nuevaPieza.x
        var altura = panel.nuevaPieza.y

        for(let y=1;y<=panel.nuevaPieza.altura;y++,altura++){
            for(let x=1;x<=panel.nuevaPieza.longitud;x++,posicion++){
                panel.matriz[altura][posicion]=1
            }
            posicion = panel.nuevaPieza.x
        }
        

    },
    controlTeclas: () =>{
        document.addEventListener("keydown", function(event) {
            if (event.key == "ArrowLeft"){
                panel.moverIzq()
            } else if (event.key == "ArrowUp"){
                
                panel.moverGi()


            } else if (event.key == "ArrowRight"){
                panel.moverDra()
            } else if (event.key == "ArrowDown"){
                panel.moverAba()
            }
        });
    },
    borrarPieza: () =>{
        var posicion = panel.nuevaPieza.x
        var altura = panel.nuevaPieza.y

        for(let y=1;y<=panel.nuevaPieza.altura;y++,altura++){
            for(let x=1;x<=panel.nuevaPieza.longitud;x++,posicion++){
                panel.matriz[altura][posicion]=0
            }
            posicion = panel.nuevaPieza.x
        }
    },
    moverDra: () =>{
        panel.borrarPieza()
        if(panel.matriz[1][panel.nuevaPieza.x+panel.nuevaPieza.longitud]==0){
            panel.nuevaPieza.x++
        }else{
            console.log("ya no puede moverse a la derecha")
        }
        panel.insertarPieza()
        panel.pintapanel()
    },
    moverIzq: () =>{
        panel.borrarPieza()
        if(panel.matriz[1][panel.nuevaPieza.x-1]==0){
            panel.nuevaPieza.x--
        }else{
            console.log("ya no puede moverse a la izquierda")
        }
        panel.insertarPieza()
        panel.pintapanel()
    },
    moverAba: () =>{
        panel.borrarPieza()
        if(panel.matriz[panel.nuevaPieza.y+panel.nuevaPieza.altura][panel.nuevaPieza.x]==0){
            panel.nuevaPieza.y++
        }else{
            console.log("ya no puede bajar")
        }
        panel.insertarPieza()
        panel.pintapanel()      
         
    },
    moverGi: () =>{

        var girar = panel.comprobarGirar()
        console.log(girar)
        if (girar == false) {
            panel.borrarPieza()
            panel.nuevaPieza.girar()
            panel.borrarPieza()
            panel.insertarPieza()
            panel.pintapanel()
        }else{
            console.log("ya no puede girarse mas")
        }


    },
    comprobarGirar: () =>{
    
        var puedeGirar = false;

        panel.borrarPieza();
        panel.nuevaPieza.girar();
        console.log("1 " + panel.nuevaPieza.angulo)
        for (let y = 0; y < panel.nuevaPieza.altura; y++) {
          for (let x = 0; x < panel.nuevaPieza.longitud; x++) {
            if (panel.matriz[y + panel.nuevaPieza.y][x + panel.nuevaPieza.x] > 0) {
                puedeGirar = true;
            }
          }
        }
        panel.nuevaPieza.girar();
        panel.nuevaPieza.girar();
        panel.nuevaPieza.girar();
        panel.insertarPieza(panel.nuevaPieza);
        return puedeGirar;
    },
    inicarMovimiento: () =>{
         const myTimeout = setInterval(panel.moverAba, 3000);
        
    }

}
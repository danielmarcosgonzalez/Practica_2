import { filt_genre } from "./ejercicio3.ts";
import { add_book } from "./ejercicio3.ts";
import { book } from "./ejercicio3.ts";
import { bookstore } from "./ejercicio3.ts";
import { erase_book } from "./ejercicio3.ts";

function main (){

let libreria:bookstore={
    books:[]
 }

let num:String="";
 while(num!="4"){
    console.log("1 - Crear libro")
    console.log("2 - Filtrar libro por genero")
    console.log("3 - Borrar libro")
    console.log("4 - Salir")
    num = prompt("Elige una opcion de las mostradas")
    if(num==="1"){
        const titulo = prompt("Introduce el titulo del libro")
        const autor = prompt("Introduce el nombre del autor")
        const paginas = parseInt(prompt("Introduce el numero de paginas"))
        
        const genero = prompt("Introduce el genero del libro")
        const v:book = add_book(libreria,titulo,autor,paginas,genero);
        libreria.books.push(v);
        console.log("Libro añadido correctamente")

    }else if(num==="2"){
        const genero = prompt("Introduce el genero para filtrar")
        const libros = filt_genre(libreria,genero)
        libros.forEach((elem)=>console.log(elem.id+" "+elem.title+" "+elem.author+" "+elem.pages+" "+elem.genre+"\n"))
    }else if(num==="3"){
        console.log("Eliminamos el ultimo libro")
        erase_book(libreria);
        console.log("Se elimino correctamente")
    }else if(num==="4"){
        return 0;
    }else{
        console.log("Error al elegir opcion intenta de nuevo")
    }
    
 }

}

main();
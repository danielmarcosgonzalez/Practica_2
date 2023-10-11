import { assertEquals } from "https://deno.land/std@0.203.0/assert/mod.ts";
import { filt_genre } from "./ejercicio3.ts";
import { book } from "./ejercicio3.ts";
import { bookstore } from "./ejercicio3.ts";

Deno.test(function FILT_GENRE() {
    let b0:book={
        id: 0,
        title: "don quijote",
        author: "cervantes",
        pages: 300,
        genre:"abstracto"
    }

    let b1:book={
        id: 1,
        title: "don quijote",
        author: "cervantes",
        pages: 300,
        genre:"literario"
    }

    let b2:book={
        id: 2,
        title: "don quijote",
        author: "cervantes",
        pages: 300,
        genre:"literario"
    }
    let libreria:bookstore={
        books:[]
     }
     libreria.books.push(b0)
     libreria.books.push(b1)
     libreria.books.push(b2)

     const resul = libreria.books.filter((elem)=>elem.genre==="abstracto")
  assertEquals(filt_genre(libreria,"abstracto"), resul);
});
import { assertEquals } from "https://deno.land/std@0.203.0/assert/mod.ts";
import { erase_book } from "./ejercicio3.ts";
import { book } from "./ejercicio3.ts";
import { bookstore } from "./ejercicio3.ts";

Deno.test(function ERASE_BOOK() {
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

     const resul = [b0,b1]
     erase_book(libreria)
  assertEquals(libreria.books, resul);
});
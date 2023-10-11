import { assertEquals } from "https://deno.land/std@0.203.0/assert/mod.ts";
import { add_book } from "./ejercicio3.ts";
import { book } from "./ejercicio3.ts";
import { bookstore } from "./ejercicio3.ts";

Deno.test(function ADD_BOOK() {
    let resul:book={
        id: 0,
        title: "don quijote",
        author: "cervantes",
        pages: 300,
        genre:"literario"
    }
    let libreria:bookstore={
        books:[]
     }
  assertEquals(add_book(libreria,"don quijote","cervantes",300,"literario"), resul);
});
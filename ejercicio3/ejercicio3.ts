export type book={
    id:number;
    title:string;
    author:string;
    pages:number;
    genre:string;
}


export type bookstore={
    books:book[]
}


 export function add_book (bookshop:bookstore,title:string,author:string,pages:number,genre:string):book{
    let identificador=0;
    if(bookshop.books.length===0){
        identificador=0;
    }else{
        bookshop.books.forEach((elem,i)=>{
            if(identificador===elem.id||identificador===i){
                identificador++;
            }
        })
    }

    let resul:book={
        id: identificador,
        title: title,
        author: author,
        pages: pages,
        genre:genre
    }

    return resul;
 }

 export function filt_genre(bookshop:bookstore,genre:string): Array<book>{
        const resul = bookshop.books.filter((elem)=>elem.genre===genre)
    return resul;
 }

 export function erase_book(bookshop:bookstore){
    bookshop.books.pop();
 }

 

//Tipos 

type pagination ={
    currentPage: number;
    nextPage: number;
    totalPages: number;
}

type quote ={
    id: string;
    quoteText: string;
    quoteAuthor: string;
    quoteGenre: string;
    __v: number;
}

type solucion ={
    statusCode: number;
    message: string;
    pagination: pagination;
    totalQuotes: number;
    data:Array<quote>;

}


const fetchData = async () => {
    try {
      // Fetch a resource from the network. It returns a Promise
      // that resolves to the Response to that Request, whether it is successful or not.
      const response = await fetch(
        "https://quote-garden.onrender.com/api/v3/quotes"
      );
  
      // Takes a Response stream and reads it to completion. It returns a promise that resolves
      // with the result of parsing the body text as JSON.
      const data: solucion = await response.json();
      
      data.data.forEach((elem,i)=>console.log("Genero: "+elem.quoteGenre+"\n"+" Autor: "+elem.quoteAuthor+"\n"+" Quote: "+elem.quoteText+"\n"))

      
      
    } catch (error) {
      // Debemos tratar siempre los errores cuando trabajemos con Promesas
      console.log(error);
    }
  };

  fetchData();
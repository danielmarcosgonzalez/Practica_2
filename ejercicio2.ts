
type pokemon ={
    abilities:Array<abili>;
    base_experience: number;
    forms:Array<form>;
    game_indices:Array<game_inde>;
    height:number;
    held_items:Array<held_item>;
    id:number;
    is_default:boolean;
    location_area_encounters:string;
    moves:Array<mov>;
    name:string;
    order:number;
    past_types:Array<null>; // buscar mas informacion
    species:form;
    sprites:sprite;     //Crear ultimo type largo
    stats:Array<sta>;
    types:Array<ty>;
    weight:number;
}

    type abili ={
        name: string;
        url: string;
        is_hideen: boolean;
        stot: number;
    }

    type form ={
        name: string;
        url: string;
    }

    type game_inde={
      game_index: number;
      version: form;
    }
    
    type version_detail={
      rarity:number;
      version:form;
    }

    type held_item={
      item: form;
      version_details: Array<version_detail>;
    }

    type version_group_detail ={
      level_learned_at: number;
      move_learn_method: form;
      version_group: form;
    }

    type mov={
      move:form;
      version_group_details:Array<version_detail>;
    }

    type sprite={
      back_shiny: string;
      back
    }

    type sta={
      base_stat: number;
      effort: number;
      stat: form;
    }

    type ty ={
      slot: number;
      type: form;
    }

    type tipo={
      damage_relations:null;
      game_indices:Array<null>;
      generation:generatio;
      id:number;
      move_damage_class:null;
      moves:Array<null>;
      name:string;
      names:Array<null>;
      past_damage_relations:Array<null>;
      pokemon:Array<null>;

    }

    type generatio={
      name:string;
      url:string;
    }


    //solo hay 18 tipos el 1 es normal y el 18 es fairy, no hay 19 para haceder a los tipos es con este enlace:
    //"https://pokeapi.co/api/v2/type/1" usando de ejemplo el 1 que seria de tipo normal

const fetchPokemon = async (nombre:string) => {
    try {
      // Fetch a resource from the network. It returns a Promise
      // that resolves to the Response to that Request, whether it is successful or not.
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+nombre);
  
      // Takes a Response stream and reads it to completion. It returns a promise that resolves
      // with the result of parsing the body text as JSON.
      const data: pokemon = await response.json();

      console.log("Nombre: "+data.name)
      console.log("Id: "+data.id)
      console.log("Tipo del pokemon: ")
      data.types.forEach((elem)=>console.log(elem.type.name));
      
      //data.results.forEach((elem,i)=>console.log(elem.name))
        //const arr = data.results.filter((elem)=>elem.name=="imposter");
         //arr.forEach((elem)=>console.log("Nombre: "+elem.name+"\n"+" URL: "+elem.url+"\n"))
      
      
    } catch (error) {
      // Debemos tratar siempre los errores cuando trabajemos con Promesas
      //console.log(error);
      console.log("Nombre del pokemon no se encuentra o no esta disponible, Not Found")
    }
  };


  const fetchTipo = async (tipo:string) => {
    try {
      // Fetch a resource from the network. It returns a Promise
      // that resolves to the Response to that Request, whether it is successful or not.
      const response = await fetch("https://pokeapi.co/api/v2/type/"+tipo);
  
      // Takes a Response stream and reads it to completion. It returns a promise that resolves
      // with the result of parsing the body text as JSON.
      const data: tipo = await response.json();

      console.log("Nombre: "+data.name)
      console.log("Generacion: "+data.generation.name)
      
      
      //data.results.forEach((elem,i)=>console.log(elem.name))
        //const arr = data.results.filter((elem)=>elem.name=="imposter");
         //arr.forEach((elem)=>console.log("Nombre: "+elem.name+"\n"+" URL: "+elem.url+"\n"))
      
      
    } catch (error) {
      // Debemos tratar siempre los errores cuando trabajemos con Promesas
      //console.log(error);
      console.log("El tipo del pokemon no se encuentra o no esta disponible, Not Found")
    }
  };


  let d:number=0;

  while(d>2 || d<1){

    const de = parseInt(prompt("Como quieres realizar una busqueda:","1 -Nombre 2 -Tipo"));
    d = de;

  if(d===1){
    const n = prompt("Introduce el nombre del Pokemon:");
    fetchPokemon(n);
  }else if(d===2){
    const t = prompt("Introduce el tipo del Pokemon de forma numerica del 1 al 18:");
    fetchTipo(t);
  }else{
    console.log("Valor no valido intenta de nuevo")
  }

  }
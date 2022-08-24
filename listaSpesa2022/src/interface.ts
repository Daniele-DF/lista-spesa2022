


export interface Collections {
  categorie: ICategorie;
  lista: IListaCreata;
  prodotti: IProdotti;
}

export interface ICategorie {
  id: IdCategorie
}



  export interface IdCategorie {
      nome: string;
      immagine: string;
      __collections__: Collections;
  }






  export interface IProva {
      data: Data;
      id: string;
      email: string;
      nome: string;
      array: Array[];
      __collections__: Collections;
  }



  export interface IProdotti {
    id: IdProdotto;
  }

  export interface IdProdotto{
    nomeCategoria: string;
    immagine: string;
    nome: string;
    __collections__: Collections;
  }



  export interface Array {
    preso: boolean;
    immagine: string;
    nomeCategoria: string;
    nome: string;
}

export interface IListaDaCreare {
  data: Data;
  email: string;
  array: Array[];
  nome: string;
  __collections__: Collections;
}



//----------------------------------------------------


  export interface IListaCreata {
      email: string;
      nome: string;
      id: string;
      data: string;
      array: Array[];
      __collections__: Collections;
  }

  export interface Value{
      _seconds: number;
      _nanoseconds: number;
  }

  export interface Data {
      __datatype__: string;
      value: Value;
  }















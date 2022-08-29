
export interface IListaSpesa {
  id: string;
  nome: string,
  date: string,
  email: string,
  array: IProdottiLista[]
}



export interface IListaSpesa2 {
  nome: string,
  date: string,
  email: string,
  array: IProdottiLista[]
}



export interface IProdottiLista {

  nome: string,
  nomeCategoria: string,
  immagine: string,
  preso: boolean

}

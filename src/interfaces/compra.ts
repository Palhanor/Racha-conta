export default interface ICompra {
  nome: string; // Nome da compra
  preco: number; // Preço da compra
  autores: string[]; // Lista de nomes dos consumidores (devem ser únicos)
  id: string; // Valor do id da compra
}

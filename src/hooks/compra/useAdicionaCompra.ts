/* IMPORTS */
import { useSetRecoilState } from "recoil";
import { compras } from "../../states/atom";
import { nanoid } from "nanoid";
import useAdicionaPedidoConsumidor from "../consumidor/useAdicionaPedidoConsumidor";
import { idSize } from "../../utils/idFormat";
import ICompra from "../../interfaces/compra";

/************************
O Hook recebe o nome (string), preço (number) e os autores (lista de nomes).
Então verifica se há ao menos um autor, e se o preço é maior que 0, disparando um erro caso contrário.
Por fim, cria um objeto (ICompra) de compra e o adiciona no fim da lista de compras, enquanto o passar para o hook useAdicionaPedidoConsumidor()
************************/
function useAdicionaCompra(): ((nome: string, preco: (number | null), autores: string[]) => (void | ErrorConstructor)) {
  const setListaCompras = useSetRecoilState(compras);
  const adicionaPedidoConsumidor = useAdicionaPedidoConsumidor();
  return (nome: string, preco: (number | null), autores: string[]) => {
    if (autores.length === 0)
      throw new Error("Adicione ao menos um autor para a compra");
    if (!preco) throw new Error("Adicione um preço para a compra");
    const novaCompra: ICompra = {
      nome: nome,
      preco: (preco as number) / 100,
      autores: [...autores],
      id: nanoid(idSize),
    };
    setListaCompras((listaAntiga) => [...listaAntiga, novaCompra]);
    adicionaPedidoConsumidor(novaCompra);
  };
};

export default useAdicionaCompra;

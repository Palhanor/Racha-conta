/* IMPORTS */
import { useSetRecoilState } from "recoil";
import { compras } from "../../states/atom";
import { nanoid } from "nanoid";
import useAdicionaPedidoConsumidor from "../consumidor/useAdicionaPedidoConsumidor";
import { idSize } from "../../utils/idFormat";
import ICompra from "../../interfaces/compra";

/************************
Recebe três valores referentes à uma compra: nome (string), preço (number | null) e autores (string[])
Então verifica se está sem autores ou sem preço, disparando um erro em caso afirmativo
Após isso configura um novo objeto de compra, o adicionando na lista de compras (setListaCompras)
Por fim, a compra é removida da lista de consumidores (useAdicionaPedidoConsumidor)
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

/* IMPORTS */
import { useRecoilValue, useSetRecoilState } from "recoil";
import { compras, consumidores, contaAtual } from "../../states/atom";

/************************
O hook atualiza o estado global contaAtual configurado no Recoil
Para isso ele passa as lista de consumidores e lista de compras
************************/
function useAtualizarConta(): () => void {
	const setConta = useSetRecoilState(contaAtual);
	const listaConsumidores = useRecoilValue(consumidores);
	const listaCompras = useRecoilValue(compras);
	return () => {
		setConta((conta) => {
			return {
				...conta,
				consumidores: [...listaConsumidores],
				compras: [...listaCompras],
			};
		});
	};
}

export default useAtualizarConta;

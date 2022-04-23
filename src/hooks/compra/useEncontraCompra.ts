/* IMPORTS */
import { useRecoilValue } from "recoil";
import ICompra from "../../interfaces/compra";
import { compras } from "../../states/atom";

/************************
Recebe um id (string)
Então retorna a respectiva conta (ICompra) de forma direta
************************/
function useEncontraCompra(): ((idCompra: string) => ICompra) {
    const listaCompras = useRecoilValue(compras)
    return (idCompra: string) => {
        const compraAtual = listaCompras.find(compra => compra.id === idCompra)
        if (!compraAtual) return { nome: "", preco: 0, autores: [], id: "" }
        return compraAtual
    }
}

export default useEncontraCompra;
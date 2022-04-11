import Navegacao from "../../components/Navegacao";
import IConta from "../../interfaces/conta";

export default function Historico() {
  let historicoContasObj: IConta[] = [];
  const historicoContas = localStorage.getItem("historicoContas");
  if (historicoContas) {
    historicoContasObj = [...JSON.parse(historicoContas)];
  }

  return (
    <>
      {historicoContasObj.length > 0 ? (
        <>
          <h1>Histórico</h1>
          <ul>
            {historicoContasObj.map((conta, index) => (
              <li key={index}>
                <span>{conta.nome}</span>
                <br />
                <span>Consumidores</span>
                <ul>
                  {conta.consumidores.map((consumidor) => (
                    <li key={consumidor.id}>{consumidor.nome}</li>
                  ))}
                </ul>
                <span>Compras</span>
                <ul>
                  {conta.compras.map((compra) => (
                    <li key={compra.id}>
                      {compra.nome} - R$ {compra.preco.toLocaleString("BRL")}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <h1>Histórico vazio</h1>
      )}
      <Navegacao />
    </>
  );
}

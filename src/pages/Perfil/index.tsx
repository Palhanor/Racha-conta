import { useNavigate } from "react-router-dom";
import Navegacao from "../../components/Navegacao";
import { Botao, Image, Titulo } from "../../components/StyledComponents";
import useConta from "../../hooks/useConta";
const ilustracao: string =
  require("../../assets/WellcomeIllustration.svg").default;

export default function Perfil() {
  const navigate = useNavigate();
  const { contaExiste, resetaConta } = useConta();

  function novaConta() {
    navigate("nova-conta");
  }

  function historico() {
    navigate("historico");
  }

  function excluirConta() {
    resetaConta();
  }

  return (
    <>
      <Titulo>Bem vindo(a)!</Titulo>
      <Image src={ilustracao} alt="Ilustração de bem-vindo" />
      <br />
      <div>
        <Botao secondary onClick={historico}>
          Histórico
        </Botao>
        {!contaExiste ? (
          <Botao white onClick={novaConta}>
            Nova conta
          </Botao>
        ) : (
          <Botao danger onClick={excluirConta}>
            Excluir conta
          </Botao>
        )}
      </div>
      {contaExiste && <Navegacao />}
    </>
  );
}

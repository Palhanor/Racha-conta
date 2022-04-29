import { useNavigate } from "react-router-dom"
import { Botao, Image, Titulo } from "../../components/StyledComponents";
const ilustracao: string =
  require("../../assets/WellcomeIllustration.svg").default;

export default function Perfil() {

    const navigate = useNavigate()

    function novaConta() {
        navigate("nova-conta")
    }

    function historico() {
        navigate("historico")
    }

    return (
        <>
        <Titulo>Estávamos com saudades!</Titulo>
        <Image src={ilustracao} alt="Ilustração de bem-vindo"/>
        <br />
        <div>
            <Botao white onClick={novaConta}>Nova conta</Botao>
            <Botao secondary onClick={historico}>Histórico</Botao>
        </div>
        </>
    );
}
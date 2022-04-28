import { useNavigate } from "react-router-dom"

export default function Perfil() {

    const navigate = useNavigate()

    function novaConta() {
        navigate("nova-conta")
    }

    function historico() {
        navigate("historico")
    }

    return (
        <div>
            <button onClick={novaConta}>Nova conta</button>
            <br />
            <button onClick={historico}>Histórico</button>
        </div>
    );
}
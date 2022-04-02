import { useNavigate } from "react-router-dom";
import "./style.css";

export default function NotFound() {

  const navigation = useNavigate()

    return (
      <>
        <h1 className="error_title">Página não encontrada!</h1>
        <img src="assets/Error.svg" alt="Ilustração de uma televisão pegando fogo e exibindo o sinal de 404" className="error_image" />
        <button className="error_return" onClick={e => navigation(-1)}>Retornar</button>
      </>
    );
  }
  
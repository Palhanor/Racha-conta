// Icone usado: https://www.pixeltrue.com/free-packs/error-state

import { useNavigate } from "react-router-dom";
import "./style.css";

export default function NotFound() {

  const navigate = useNavigate()

    return (
      <>
        <h1 className="error_title">Página não encontrada!</h1>
        <img src="assets/Error.svg" alt="Ilustração de uma televisão pegando fogo e exibindo o sinal de 404" className="error_image" />
        <button className="error_return" onClick={() => navigate(-1)}>Retornar</button>
      </>
    );
  }
  
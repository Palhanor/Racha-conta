import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { BsPeopleFill, BsCartCheckFill, BsFileEarmarkTextFill } from "react-icons/bs";
import "./style.scss";

export default function Navegacao() {

  const navData = [
    {
      url: "/clientes",
      text: "Clientes",
      icon: <IconContext.Provider value={{color: "#FFFFFF"}}><BsPeopleFill size={20} /></IconContext.Provider>
    },
    {
      url: "/pedidos",
      text: "Pedidos",
      icon: <IconContext.Provider value={{color: "#FFFFFF"}}><BsCartCheckFill size={20} /></IconContext.Provider>
    },
    {
      url: "/extrato",
      text: "Extrato",
      icon: <IconContext.Provider value={{color: "#FFFFFF"}}><BsFileEarmarkTextFill size={20} /></IconContext.Provider>
    }
  ];

  return (
    <div className="navegacao_container">
      {navData.map((item, index) => (
        <Link to={item.url} className="navegacao_link" key={index}>
          {item.icon}
          <span>{item.text}</span>
        </Link>
      ))}
    </div>
  );
}

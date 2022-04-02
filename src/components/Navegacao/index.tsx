import { Link } from "react-router-dom";
import { FaUserTie, FaClipboardList } from "react-icons/fa";
import { MdExitToApp } from "react-icons/md";
import "./style.css";
import { IconContext } from "react-icons";

export default function Navegacao() {

  const navData = [
    {
      url: "/clientes",
      text: "Clientes",
      icon: <IconContext.Provider value={{color: "#FFFFFF"}}><FaUserTie size={20} /></IconContext.Provider>
    },
    {
      url: "/pedidos",
      text: "Pedidos",
      icon: <IconContext.Provider value={{color: "#FFFFFF"}}><FaClipboardList size={20} /></IconContext.Provider>
    },
    {
      url: "/sair",
      text: "Sair",
      icon: <IconContext.Provider value={{color: "#FFFFFF"}}><MdExitToApp size={20} /></IconContext.Provider>
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

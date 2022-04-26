/* IMPORTS */
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { brkpt, color } from "../../styles";
import { IconContext } from "react-icons";
import useConta from "../../hooks/useConta";
import { RiHistoryFill } from "react-icons/ri"
import {
  BsPeopleFill,
  BsCartCheckFill,
  BsFileEarmarkTextFill,
} from "react-icons/bs";

/* STYLED COMPONENTS */
const Navbar = styled.nav`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  background-color: ${color.theme};
  position: fixed;
  bottom: 0;

  @media (min-width: ${brkpt.desktop}) {
    position: static;
    flex-direction: column;
    align-items: center;
    background-color: ${color.themeDarker};
    width: 5rem;
    border-radius: 10px 0 0 10px;
    order: 1;
    height: 75vh;
  }
`;
const IconLink = styled(Link)`
  text-decoration: none;
  padding: .5rem;
  border-radius: 5px;
  transition: .2s;
  font-size: .8rem;
`;

/* COMPONENTE */
export default function Navegacao() {

  /* HOOK DO REACT ROUTER */
  const { pathname } = useLocation();
  const { conta } = useConta()

  /* DADOS ESTÁTICOS DOS ÍCONES */
  const dadosNavegacao = [
    {
      id: 0,
      url: "/historico",
      icon: (
        <IconContext.Provider
          value={{ color: pathname === "/historico" ? color.themeLighter : color.white }}
        >
          <RiHistoryFill size={22} />
        </IconContext.Provider>
      ),
    },
    {
      id: 1,
      url: "/consumidores",
      icon: (
        <IconContext.Provider
          value={{
            color:
              pathname === "/consumidores" ? color.themeLighter : color.white,
          }}
        >
          <BsPeopleFill size={22} />
        </IconContext.Provider>
      ),
    },
    {
      id: 2,
      url: "/compras",
      icon: (
        <IconContext.Provider
          value={{
            color: pathname === "/compras" ? color.themeLighter : color.white,
          }}
        >
          <BsCartCheckFill size={22} />
        </IconContext.Provider>
      ),
    },
    {
      id: 3,
      url: `/extrato/${conta.id}`,
      icon: (
        <IconContext.Provider
          value={{
            color: pathname === `/extrato/${conta.id}` ? color.themeLighter : color.white,
          }}
        >
          <BsFileEarmarkTextFill size={22} />
        </IconContext.Provider>
      ),
    },
  ];

  /* JSX */
  return (
    <Navbar>
      {dadosNavegacao.map((item) => (
        <IconLink to={item.url} key={item.id}>
          {item.icon}
        </IconLink>
      ))}
    </Navbar>
  );
}

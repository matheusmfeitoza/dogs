import React from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import styles from "./Styles/UserHeaderNavStyle.module.css";
//Import SVG's
import { ReactComponent as MinhasFotos } from "../../Assets/feed.svg";
import { ReactComponent as Statics } from "../../Assets/estatisticas.svg";
import { ReactComponent as PostPhoto } from "../../Assets/enviar.svg";
import { ReactComponent as Logout } from "../../Assets/sair.svg";
import useMedia from "../../Hooks/useMedia";

const UserHeaderNav = () => {
  const { logoutUser } = React.useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem)");
  const [menuMobile, setMenuMobile] = React.useState(false);

  return (
    <>
      {mobile && (
        <button
          aria-label="menu"
          className={`${styles.menuMobile}`}
          onClick={() => setMenuMobile(!menuMobile)}
        ></button>
      )}
      <nav className={styles.nav}>
        <NavLink to="/conta" end>
          {" "}
          <MinhasFotos />
          {mobile && "Minhas fotos"}
        </NavLink>
        <NavLink to="estatisticas">
          <Statics />
          {mobile && "Estatisticas"}
        </NavLink>
        <NavLink to="postar">
          {" "}
          <PostPhoto />
          {mobile && "Adicionar fotos"}
        </NavLink>
        <button onClick={logoutUser}>
          {" "}
          <Logout />
          {mobile && "sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;

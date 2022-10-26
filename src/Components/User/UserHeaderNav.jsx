import React from "react";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../../store/user";
import styles from "./Styles/UserHeaderNavStyle.module.css";
//Import SVG's
import { ReactComponent as MinhasFotos } from "../../Assets/feed.svg";
import { ReactComponent as Statics } from "../../Assets/estatisticas.svg";
import { ReactComponent as PostPhoto } from "../../Assets/enviar.svg";
import { ReactComponent as Logout } from "../../Assets/sair.svg";
import useMedia from "../../Hooks/useMedia";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const UserHeaderNav = () => {
  const dispatch = useDispatch();
  const mobile = useMedia("(max-width: 40rem)");
  const [menuMobile, setMenuMobile] = React.useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuMobile(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="menu"
          className={`${styles.menuMobile} ${
            menuMobile && styles.menuMobileActive
          }`}
          onClick={() => setMenuMobile(!menuMobile)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          menuMobile && styles.navMobileActive
        }`}
      >
        <NavLink to="/conta" end>
          <MinhasFotos />
          {mobile && "Minhas fotos"}
        </NavLink>
        <NavLink to="estatisticas">
          <Statics />
          {mobile && "Estatisticas"}
        </NavLink>
        <NavLink to="postar">
          <PostPhoto />
          {mobile && "Adicionar fotos"}
        </NavLink>
        <button onClick={() => dispatch(logoutUser())}>
          <Logout />
          {mobile && "sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;

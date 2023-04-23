import ContainerFluid from "./ContainerFluid";
import NavBrand from "./NavBrand";
import NavToggler from "./NavToggler";
import NavMenu from "./NavMenu";
import "bootstrap/js/dist/collapse";

const Nav = ({ avatar, permissions }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <ContainerFluid>
      <NavBrand />
      <NavToggler />
      <NavMenu permissions={permissions} avatar={avatar} />
    </ContainerFluid>
  </nav>
);

export default Nav;

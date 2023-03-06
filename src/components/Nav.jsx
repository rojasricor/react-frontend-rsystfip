import NavBrand from "./NavBrand";
import NavToggler from "./NavToggler";
import NavMenu from "./NavMenu";
import NavDropdown from "./NavDropdown";

export default function Nav({ avatar, permissions }) {
  return (
    <nav className="navbar navbar-expand-xl bg-light fixed-top">
      <div className="container-fluid">
        <NavBrand />
        <NavToggler />
        <div className="collapse navbar-collapse" id="rs-nav">
          <NavMenu permissions={permissions} />
        </div>
        <div
          className="collapse navbar-collapse justify-content-lg-end"
          id="rs-nav"
        >
          <NavDropdown avatar={avatar} />
        </div>
      </div>
    </nav>
  );
}

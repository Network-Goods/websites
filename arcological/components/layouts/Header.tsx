import Navigation from "./Navigation";
import './Header.module.scss';
export default function Header() {
    return (
<header>
  <Navigation>
    <li className="menu-item has-dropdown">
      <button aria-haspopup="true" aria-expanded="false">Funds</button>
      <ul>
        <li className="submenu-item">
          <a href="/#ipfs-funds">IPFS Fund</a>
        </li>
        <li className="submenu-item">
          <a href="/#private-retreival-funds">Private Retrieval</a>
        </li>
      </ul>
    </li>
    <li className="menu-item">
      <a href="/#why">Why</a>
    </li>
    <li className="menu-item">
      <a href="/#about">About</a>
    </li>
    <li className="menu-item has-dropdown">
      <button aria-haspopup="true" aria-expanded="false">How To</button>
      <ul>
        <li className="submenu-item">
          <a target="_blank" rel="noreferrer" href="https://github.com/protocol/research-grants/blob/master/RFPs">Open RFP's</a>
        </li>
      </ul>
    </li>
  </Navigation>
  </header>
    );
}
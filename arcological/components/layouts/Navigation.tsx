
import Image from 'next/image';
import banner_img from '../../assets/img/arcological-banner.png';

export default function Navigation({ children }) {
  return (
<div id="main-navigation" className="is-desktop padding-16">
  <div className="container">
    <a href="/">
      <Image
        className="logo-header"
        src={banner_img}
        alt="Arcological Logo"
      />
    </a>
    <div className="wrapper">
      <nav className="desktop-menu">
        <ul>
        { children }
        </ul>
      </nav>
    </div>
    <nav className="mobile-menu">
      <ul>
        { children }
      </ul>
    </nav>
  </div>
</div>);
}
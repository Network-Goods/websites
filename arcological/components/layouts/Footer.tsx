
import Image from 'next/image';
import footer_img from '../../assets/img/arcological-logo-footer.png';

export default function Footer() {
  return (
<footer>
  <div id="footer-navigation" className="is-desktop padding-16 bg-neutral-800">
    <div className="container">
      <div>
        <Image
          className="logo-footer"
          src={footer_img}
          alt="Arcological Logo"
        />
      </div>
      <div className="wrapper">
        <nav className="desktop-menu">
          <ul className="text-neutral-0">
            <li className="menu-item">
              <a target="_blank" rel="noreferrer" href="https://t.me/+LUkcEgSKy-o1ZmNh">Telegram</a>
            </li>
            <li className="menu-item">
              <a target="_blank" rel="noreferrer" href="https://discord.gg/r9FEdJDD">Discord</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</footer>);
}
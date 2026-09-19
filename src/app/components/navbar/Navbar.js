import Image from "next/image";

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar__container">

        <div className="navbar__left">
          <a href="#" className="navbar__link">
            About Us
          </a>

          <a href="#" className="navbar__link">
            Intelligent Capital Advisory
          </a>
        </div>

        <div className="navbar__logo">
          <Image
            src="/images/navbar/logo.png"
            alt="The U Group"
            width={76}
            height={60}
            priority
          />
        </div>

        <div className="navbar__right">
          <a href="#" className="navbar__link">
            Leadership
          </a>

          <a href="#" className="navbar__link">
            Ventures
          </a>

          <a href="#" className="navbar__contact">
            Contact
          </a>
        </div>

      </nav>
    </header>
  );
}
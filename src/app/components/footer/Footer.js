import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">

      {/* Main footer */}
      <div className="footer__main">

        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <Image
              src="/images/navbar/logo.png"
              alt="The U Group"
              width={150}
              height={120}
            />
          </div>

          <p className="footer__tagline">
            We build businesses, create
            opportunity, and generate
            lasting shared value.
          </p>
        </div>

        {/* Company */}
        <div className="footer__column">
          <h3 className="footer__heading">
            COMPANY
          </h3>

          <a href="#" className="footer__link">
            About Us
          </a>

          <a href="#" className="footer__link">
            Intelligent Capital Advisory
          </a>

          <a href="#" className="footer__link">
            Leadership
          </a>

          <a href="#" className="footer__link">
            Ventures
          </a>
        </div>

        {/* Ventures */}
        <div className="footer__column">
          <h3 className="footer__heading">
            VENTURES
          </h3>

          <a href="#" className="footer__link">
            Portfolio & Partnerships
          </a>

          <a href="#" className="footer__link">
            JuJu Labs
          </a>

          <a href="#" className="footer__link">
            Bioved
          </a>

          <a href="#" className="footer__link">
            VenIQ
          </a>
        </div>

        {/* Capital & Advisory */}
        <div className="footer__column">
          <h3 className="footer__heading">
            CAPITAL & ADVISORY
          </h3>

          <a href="#" className="footer__link">
            Intelligent Capital Advisory
          </a>

          <a href="#" className="footer__link">
            Blink Equity Capital
          </a>

          <a href="#" className="footer__link">
            Blink Bridge Capital
          </a>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">

        <p className="footer__copyright">
          © 2026 The U Group LLC. All Rights Reserved.
        </p>

        <p className="footer__credit">
          Designed and Built by <strong>UNIFIROLABS</strong>
        </p>

      </div>

    </footer>
  );
}
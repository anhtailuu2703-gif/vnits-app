import "./Styles/Footer.css";
import Logoitem from "../assets/vnits_logo.png"
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* LEFT */}
          <div className="footer-about">
            <img
              src={Logoitem}
              alt="ITS Solutions"
              className="footer-logo"
            />

            <h3>
              Công ty TNHH Giải pháp công nghệ thông tin và an ninh ITS
            </h3>

            <p>
              Giải pháp hạ tầng công nghệ thông tin và an ninh toàn diện cho các
              công trình hiện đại.
            </p>

            <div className="footer-social">
              <a href="/">
                Fb
              </a>

              <a href="/">
                In
              </a>
            </div>
          </div>

          {/* CENTER */}
          <div className="footer-links">
            <h4>Giải pháp</h4>

            <ul>
              <li><Link to="/system/it-infrastructure">Hạ tầng CNTT</Link></li>
              <li><Link to="/system/cctv">Hệ thống CCTV</Link></li>
              <li><Link to="/system/access-control">Access Control</Link></li>
              <li><Link to="/system/video-door-phone">Video Door Phone</Link></li>
              <li><Link to="/system/car-parking">Car Parking</Link></li>
              <li><Link to="/system/PA-system">Hệ thống âm thanh thông báo (PA)</Link></li>
              <li><Link to="/system/audio-visual">Hệ thống Âm thanh ánh sáng (Audio Visual)</Link></li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="footer-contact">
            <h4>Liên hệ</h4>

            <div className="contact-info">
              <p>Tòa nhà ITS, Quận 1, TP.HCM</p>
              <p>contact@its-solutions.vn</p>
              <p>+84 123 456 789</p>
            </div>

            {/* GOOGLE MAP */}
            <div className="footer-map">
              <iframe
                title="ITS Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.414182267352!2d106.70098027570393!3d10.778008259178312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3f9d7d4c3f%3A0x5f93b0df7f1e8f6b!2zUXXhuq1uIDEgSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1710000000000!5m2!1svi!2s"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © 2023 ITS Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
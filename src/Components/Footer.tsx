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
                <img src="https://cdn2.fptshop.com.vn/svg/facebook_icon_8543190720.svg" alt="Facebook" />
              </a>

              <a href="/">
                <img src="https://img.lazcdn.com/g/tps/imgextra/i4/O1CN011gka8L1E0PIZlHK7e_!!6000000000289-2-tps-34-34.png" alt="instgram" />
              </a>
            </div>
          </div>

          {/* CENTER */}
          <div className="footer-links">
            <h4>Giải pháp</h4>

            <ul>
              <li className="footer-item"><Link to="/system/ha-tang-cntt">Hạ tầng CNTT</Link></li>
              <li><Link to="/system/he-thong-cctv">Hệ thống CCTV</Link></li>
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
              <p>Số 1 Nguyễn Thông, P.Nhiêu Lộc, TP.HCM</p>
              <p>admin@its-solutions.vn</p>
              <p>(+84)0765081898</p>
            </div>

            {/* GOOGLE MAP */}
            <div className="footer-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3772359200807!2d106.6746015748049!3d10.782392289366696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f0f89ff5d91%3A0x430a31ef6a3a4ef4!2zMSBOZ3V54buFbiBUaMO0bmcsIFN0cmVldCBOaGnDqnUgTOG7mWMsIEjhu5MgQ2jDrSBNaW5oIDcwMDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1779179546638!5m2!1svi!2s" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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
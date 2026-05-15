import React, { useState } from "react";
import "./Styles/Header.css";
import LogoItem from "../assets/vnits_logo.png"
import { href, Link } from "react-router";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <img src={LogoItem} alt="VNITS Logo" className="logo-icon" />
        </div>

        {/* Menu */}
        <nav className={`nav ${open ? "active" : ""}`}>
          <Link to="/">Trang chủ</Link>
          <div className="dropdown">
            <span>Giải pháp ▾</span>
            <div className="dropdown-menu">
              <Link to="/system/ha-tang-cntt">Hạ tầng CNTT</Link>
              <Link to="/system/cctv">Hệ thống CCTV</Link>
              <Link to="/system/access-control">Access Control</Link>
              <Link to="/system/video-door-phone">Video Door Phone</Link>
              <Link to="/system/car-parking">Car Parking</Link>
              <Link to="/system/pa-system">Hệ thống âm thanh thông báo (PA)</Link>
              <Link to="/system/audio-visual">Hệ thống Âm thanh ánh sáng (Audio Visual)</Link>
            </div>
          </div>
          <Link to="/projects">Dự án</Link>
          <Link to="/partners">Đối tác</Link>
        </nav>

        {/* CTA */}
        <div className="actions">
          <button className="cta" onClick={() => window.location.href = '/contact'}>
            Liên hệ ngay
          </button>
          <div className="menu-toggle" onClick={() => setOpen(!open)}>
            ☰
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
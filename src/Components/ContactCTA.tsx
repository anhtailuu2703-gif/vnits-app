import { motion } from "framer-motion";
import { fadeUp } from "./data/animation";
import "./Styles/ContactCTA.css";
import { Eye, Send } from "lucide-react";
import { Link } from "react-router";

export default function ContactCTA() {
  return (
    <motion.section className="contact-cta" variants={fadeUp} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
      <div className="cta-container" >
        <span className="cta-badge">LIÊN HỆ VỚI CHÚNG TÔI</span>

        <h2>
          ITS Solutions tự hào là đối tác
          <br />
          tin cậy cung cấp <span>giải pháp</span>
          <br />
          <span>công nghệ</span> hiện đại
        </h2>

        <p>
          Liên hệ ngay với chúng tôi để được tư vấn và nhận giải pháp tối ưu
          nhất cho doanh nghiệp của bạn.
        </p>

        <div className="cta-buttons">
          <Link to={"/contact"} className="btn-primary" style={{textDecoration:"none"}}>
            <Send size={17} />
            Nhận Tư Vấn Miễn Phí
          </Link>

          <Link className="btn-secondary" to={"/projects"} style={{textDecoration:"none"}}>
            <Eye size={17} />
            Xem Dự Án
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
import { Link } from "react-router-dom";
import "./Styles/solution-content.css";

interface Props {
    title: string;
    overview: string;
    slug: string;
    features: string[];
    benefits: string[];
}

export default function SolutionContent({
    title,
    overview,
    features,
    benefits,
}: Props) {
    return (
        <section className="solution-content">
            <div className="solution-content-container">
                {/* LEFT */}
                <div className="solution-left">
                    <h2>{title}</h2>
                    <p className="solution-overview">{overview}</p>

                    <h3 className="solution-subtitle">Tính năng chính</h3>

                    <div className="solution-features">
                        {features.map((item, index) => (
                            <div className="feature-card active" key={index}>
                                <span className="feature-check">✓</span>
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT – STICKY */}
                <aside className="solution-right">
                    <h3>Lợi ích mang lại</h3>

                    <ul className="solution-benefits">
                        {benefits.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <div className="solution-divider" />

                    <div className="solution-consult">
                        <h4>CẦN TƯ VẤN SÂU PHÂN HỆ NÀY?</h4>
                        <Link className="solution-cta" to="/contact" style={{textDecoration: "none"}}>
                            Liên hệ Chuyên gia
                        </Link>
                    </div>
                </aside>
            </div>
        </section>
    );
}
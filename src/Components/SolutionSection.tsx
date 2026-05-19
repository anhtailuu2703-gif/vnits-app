import { Link } from "react-router-dom";
import "./Styles/SolutionSection.css";
import solutionItem from "./data/solutionsData";
import { iconMap } from "./icons/icons";
import { motion } from "framer-motion";
import { fadeUp } from "./data/animation";

export default function SolutionSection() {
    
    return (
        <section className="it-section" id="system">
            <div className="it-container">

                {/* HEADER */}
                <div className="it-header">
                    <h2>
                        GIẢI PHÁP CÔNG NGHỆ THÔNG TIN
                        <br />
                        <span>VÀ AN NINH TOÀN DIỆN</span>
                    </h2>
                    <p>
                        Tích hợp sâu rộng các giải pháp công nghệ, tạo nên hệ sinh thái
                        quản lý tòa nhà thông minh, an toàn và tối ưu năng lượng.
                    </p>
                </div>

                {/* CONTENT */}

                {solutionItem.map((item, index) => {
                    // index into iconMap with a dynamic key — cast to allow string keys
                    const Icon = (iconMap as Record<string, any>)[item.icon] || (() => null);

                    return (
                        <motion.div
                            className={`it-content ${index % 2 === 1 ? "reverse" : ""}`}
                            variants={fadeUp}
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="it-image">
                                <img src={item.image} alt="" />
                            </div>

                            <div className="it-text">
                                <div className="it-title">
                                    <div className="it-icon">
                                        <Icon />
                                    </div>
                                    <h3>{item.title}</h3>
                                </div>
                                <p className="it-desc">{item.desc}</p>
                                <ul className="it-list">
                                    {item.items?.map((li, i) => (
                                        <li key={i}>{li}</li>
                                    ))}
                                </ul>
                                <Link to={`/system/${item.slug}`} className="learn-more-link">
                                    Khám phá giải pháp →
                                </Link>
                            </div>
                        </motion.div>)
                })}
            </div>
        </section>
    );
}
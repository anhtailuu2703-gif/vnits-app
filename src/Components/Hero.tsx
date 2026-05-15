import React from "react";
import "./Styles/Hero.css";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "./data/animation";

const Hero: React.FC = () => {
    return (
        <section className="hero">
            {/* overlay */}
            <div className="hero-overlay" />

            <div className="hero-container">
                {/* LEFT */}
                <motion.div className="hero-left"
                    variants={fadeLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}>
                    <div className="hero-left">
                        <div className="badge">
                            <span className="dot"></span>
                            KIẾN TẠO HẠ TẦNG TƯƠNG LAI
                        </div>

                        <h1>
                            Giải pháp <span>Toàn diện</span> cho
                            Tòa nhà <br />
                            Thông minh
                        </h1>

                        <p>
                            ITS tự hào cung cấp các hệ thống hạ tầng CNTT, an ninh (CCTV,
                            Access Control) và Âm thanh - Ánh sáng chuyên nghiệp, nâng tầm
                            giá trị cho mọi công trình.
                        </p>

                        <div className="hero-buttons">
                            <a className="btn primary" href="#system">
                                Khám phá hệ thống →
                            </a>
                            <a className="btn outline">
                                Xem hồ sơ năng lực
                            </a>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="hero-right"
                    variants={fadeRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}>
                    {/* RIGHT */}
                    <div className="hero-right">
                        <div className="hero-card">
                            <div className="hero-card-header">
                                <h3>GIÁ TRỊ CỐT LÕI</h3>
                                <span className="star">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="lucide lucide-star w-6 h-6 text-yellow-400 fill-yellow-400" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                </span>
                            </div>

                            <div className="item">
                                <div className="icon blue">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="lucide lucide-shield w-5 h-5 text-white"
                                        aria-hidden="true">
                                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4>Bảo mật tuyệt đối</h4>
                                    <p>An toàn thông tin và giám sát 24/7</p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="icon pink">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="lucide lucide-zap w-5 h-5 text-white"
                                        aria-hidden="true">
                                        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4>Đổi mới công nghệ</h4>
                                    <p>Ứng dụng giải pháp tiên tiến nhất</p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="icon green">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-award w-5 h-5 text-white"
                                        aria-hidden="true"
                                    >
                                        <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                                        <circle cx="12" cy="8" r="6" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>Cam kết chất lượng</h4>
                                    <p>Đồng hành bền vững, uptime 99.9%</p>
                                </div>
                            </div>
                        </div>

                        {/* badge uptime */}
                        <div className="uptime">
                            <span className="dot green"></span>
                            <div>
                                <strong>Uptime 99.9%</strong>
                                <p>Đảm bảo hoạt động</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
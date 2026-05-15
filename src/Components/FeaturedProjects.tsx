import { motion } from "framer-motion";
import "./Styles/FeaturedProjects.css";
import { fadeUp } from "./data/animation";

const projects = [
  {
    year: "2024",
    tags: ["CCTV", "NETWORK", "+1"],
    title: "Tòa nhà Landmark Center 1",
    desc: "Triển khai toàn bộ hệ thống mạng nội bộ nội khu, camera giám sát AI và kiểm soát ra vào cho 45 tầng văn phòng cho thuê.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "2023",
    tags: ["CAR PARKING", "CCTV", "+1"],
    title: "Eco Smart City - Khu phức hợp",
    desc: "Giải pháp bãi đỗ xe thông minh 3 hầm, hệ thống chống của màn hình cho 1000+ căn hộ và hệ thống CCTV 24/7.",
    image:
      "https://images.unsplash.com/photo-1428366890462-dd4baecf492b?auto=format&fit=crop&q=80&w=800",
  },
  {
    year: "2023",
    tags: ["IT INFRA", "PA SYSTEM"],
    title: "Tech Hub Tower",
    desc: "Thiết kế, triển khai hạ tầng Data Center đạt chuẩn Tier 3 và hệ thống âm thanh thông báo cho toàn bộ tòa nhà.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
  },
  {
    year: "2024",
    tags: ["AV SYSTEM", "NETWORK"],
    title: "Ocean View Resort",
    desc: "Hệ thống âm thanh sang hội trường sức chứa 2000 người và hệ thống Wi-Fi phủ sóng toàn bộ resort.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="featured-projects">
      <motion.div
        className="featured-container"
        variants={fadeUp}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>
        <div className="projects-header">
          <div>
            <h2>
              Dự án <span>Tiêu biểu</span>
            </h2>

            <p>
              Những công trình kiến tạo nên uy tín và khẳng định chất lượng kỹ
              thuật của đội ngũ ITS.
            </p>
          </div>

          <button className="view-all-btn" onClick={() => (window.location.href = "/projects")}>
            Xem tất cả <span>→</span>
          </button>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div
                className="project-image"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <span className="year-badge">{project.year}</span>
              </div>

              <div className="project-content">
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx}>{tag}</span>
                  ))}
                </div>

                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
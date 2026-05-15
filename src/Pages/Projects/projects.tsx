import "./projects.css";

const projects = [
    {
        tags: ["CCTV", "NETWORK", "ACCESS CONTROL"],
        title: "Tòa nhà Landmark Center 1",
        year: "2024",
        client: "Tập đoàn Alpha",
        desc: "Triển khai toàn bộ hệ thống mạng nội bộ nội khu, camera giám sát AI và kiểm soát ra vào cho 45 tầng văn phòng cho thuê.",
        img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    },
    {
        tags: ["CAR PARKING", "CCTV", "VIDEO DOOR PHONE"],
        title: "Eco Smart City - Khu phức hợp",
        year: "2023",
        client: "Tập đoàn Beta",
        desc: "Giải pháp bãi đỗ xe thông minh 3 hầm, hệ thống chuông cửa màn hình cho 1000+ căn hộ và hệ thống CCTV 24/7.",
        img: "https://images.unsplash.com/photo-1428366890462-dd4baecf492b?auto=format&fit=crop&q=80&w=800",
    },
    {
        tags: ["IT INFRA", "PA SYSTEM"],
        title: "Tech Hub Tower",
        year: "2023",
        client: "Mega Tower",
        desc: "Thiết kế, triển khai hạ tầng Data Center đạt chuẩn Tier 3 và hệ thống âm thanh thông báo cho toàn bộ tòa nhà.",
        img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    },
    {
        tags: ["AV System", "Network"],
        title: "Ocean View Resort",
        year: "2024",
        client: "Ocean Group",
        desc: "Hệ thống âm thanh ánh sáng hội trường sức chứa 2000 người và hệ thống Wi-Fi phủ sóng toàn bộ resort.",
        img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800",
    },
    {
        tags: ["PA System", "CCTV"],
        title: "Trung tâm Thương mại Starlight Plaza",
        year: "2022",
        client: "Star Retail",
        desc: "Khảo sát và nâng cấp hệ thống âm thanh thông báo và camera an ninh cho trung tâm thương mại 5 tầng.",
        img: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?auto=format&fit=crop&q=80&w=800",
    },
    {
        tags: ["IT INFRA", "Access Control"],
        title: "Bệnh viện Quốc tế Sunrise",
        year: "2022",
        client: "Sunrise Health",
        desc: "Hệ thống mạng cục bộ tốc độ cao cho phòng mổ, kiểm soát ra vào phân quyền nghiêm ngặt các khu vực cách ly.",
        img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=800",
    },
];

const ProjectSection = () => {
    return (
        <section className="project-section">
            <div className="container">
                <h2 className="title">CÁC DỰ ÁN <span>ĐÃ TRIỂN KHAI</span></h2>
                <p className="subtitle">
                    Chúng tôi luôn tự hào vì những giải pháp của mình đã góp phần tạo nên sự <br /> thành công, an toàn và tối ưu cho hàng loạt công trình lớn nhỏ trên toàn quốc.
                </p>

                <div className="grid">
                    {projects.map((item, index) => (
                        <div className="card-project" key={index}>
                            <div className="card-project-img-wrapper">
                                <div
                                    className="card-project-img"
                                    style={{ backgroundImage: `url(${item.img})` }}
                                />

                                {/* YEAR BADGE */}
                                <div className="year-badge">{item.year}</div>
                            </div>

                            <div className="card-project-tags">
                                {item.tags.map((tag, i) => (
                                    <span key={i}>{tag}</span>
                                ))}
                            </div>

                            <div className="card-project-content">
                                <h3>{item.title}</h3>
                                <h4>{item.client}</h4>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
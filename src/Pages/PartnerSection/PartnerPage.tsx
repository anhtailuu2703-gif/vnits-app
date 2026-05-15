import "./PartnerPage.css";

const data = [
  {
    title: "Hạ tầng CNTT & Mạng",
    items: [
      { name: "Cisco", img: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
      { name: "HP Enterprise", img: "https://upload.wikimedia.org/wikipedia/commons/4/46/Hewlett_Packard_Enterprise_logo.svg" },
      { name: "Juniper", img: "https://upload.wikimedia.org/wikipedia/commons/3/31/Juniper_Networks_logo.svg" },
      { name: "Dell EMC", img: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Dell_EMC_logo.svg" },
    ],
  },

  {
    title: "Hệ thống CCTV",
    items: [
      { name: "Hikvision", img: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Hikvision_logo.svg" },
      { name: "Dahua", img: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Dahua_Technology_logo.svg" },
      { name: "Axis", img: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Axis_Communications_logo.svg" },
      { name: "Bosch", img: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Bosch-Logo.svg" },
    ],
  },

  {
    title: "Access Control",
    items: [
      { name: "HID Global", img: "https://upload.wikimedia.org/wikipedia/commons/1/14/HID_Global_logo.svg" },
      { name: "Suprema", img: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Suprema_main_logo.png" },
      { name: "ZKTeco", img: "https://banner2.cleanpng.com/20180516/yiq/kisspng-biometrics-access-control-zkteco-time-and-attendan-5afbeed8da59d5.6402510415264601208944.jpg" },
      { name: "Honeywell", img: "https://1000logos.net/wp-content/uploads/2017/12/Honeywell-Logo-768x432.png" },
    ],
  },

  {
    title: "Video Door Phone",
    items: [
      { name: "Comelit", img: "https://upload.wikimedia.org/wikipedia/commons/2/25/Logo_comelit_2020.svg" },
      { name: "Akuvox", img: "https://ntg.com.vn/wp-content/uploads/2023/02/logo-akuvox-1-1024x493.png" },
      { name: "Panasonic", img: "https://icon2.cleanpng.com/20180430/otq/kisspng-panasonic-logo-company-tagline-outskirts-5ae7e2b0007821.5494067115251462880019.jpg" },
      { name: "Dahua", img: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Dahua_Technology_logo.svg" },
    ],
  },

  {
    title: "Car Parking",
    items: [
      { name: "Magnetic", img: "https://images-platform.99static.com/ytqoT_rLlQhspAamwgjFHy1jnpE=/20x15:1976x1973/fit-in/99designs-contests-attachments/88/88538/attachment_88538549" },
      { name: "ZKTeco", img: "https://banner2.cleanpng.com/20180516/yiq/kisspng-biometrics-access-control-zkteco-time-and-attendan-5afbeed8da59d5.6402510415264601208944.jpg" },
      { name: "Hikvision", img: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Hikvision_logo.svg" },
      { name: "Dahua", img: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Dahua_Technology_logo.svg" },
    ],
  },

  /* 🔥 BỊ THIẾU 2 */
  {
    title: "Hệ thống âm thanh thông báo (PA)",
    items: [
      { name: "TOA", img: "https://e7.pngegg.com/pngimages/385/981/png-clipart-toa-paint-thailand-business-logo-primer-paint-blue-text.png" },
      { name: "Bosch", img: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Bosch-Logo.svg" },
      { name: "Honeywell", img: "https://1000logos.net/wp-content/uploads/2017/12/Honeywell-Logo-768x432.png" },
      { name: "Yamaha", img: "https://e7.pngegg.com/pngimages/194/493/png-clipart-yamaha-motor-company-yamaha-corporation-motorcycle-logo-motorcycle-emblem-trademark-thumbnail.png" },
    ],
  },

  {
    title: "Hệ thống Âm thanh ánh sáng (Audio Visual)",
    items: [
      { name: "JBL", img: "https://upload.wikimedia.org/wikipedia/commons/b/bc/JBL_logo.svg" },
      { name: "Shure", img: "https://logowik.com/content/uploads/images/shure-incorporated7343.jpg" },
      { name: "Crestron", img: "data:image/png;base64,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" },
      { name: "Barco", img: "data:image/png;base64,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" },
    ],
  },
];

const clients = [
  {
    title: "Tập đoàn Vingroup",
    desc: "TRIỂN KHAI HẠ TẦNG IT CHO VINCOM",
  },
  {
    title: "Tập đoàn Novaland",
    desc: "HỆ THỐNG CCTV VÀ PA CHO KHU ĐÔ THỊ",
  },
  {
    title: "Masterise Homes",
    desc: "SMART HOME & VIDEO DOOR PHONE",
  },
  {
    title: "Sun Group",
    desc: "AV SYSTEM & MẠNG WI-FI DIỆN RỘNG",
  },
  {
    title: "Capitaland",
    desc: "HỆ THỐNG KIỂM SOÁT BÃI ĐỖ XE",
  },
  {
    title: "Techcombank",
    desc: "ACCESS CONTROL TRUNG TÂM DỮ LIỆU",
  },
];

const PartnerPage = () => {
  return (
    <section className="partner">
      <div className="container">

        {/* HEADER PAGE */}
        <div className="header-page">
          <h1>Mạng lưới <span className="text-blue">Đối tác & Khách hàng</span></h1>
          <p>
            Hợp tác cùng những thương hiệu công nghệ hàng đầu thế giới, chúng tôi <br />cam kết mang lại giải pháp chất lượng nhất cho các đối tác khách hàng danh tiếng.
          </p>
        </div>

        <div className="content-page">
          <h2 className="content-title">Thương Hiệu & Giải Pháp</h2>
        </div>

        {/* SECTION LIST */}
        {data.map((section, index) => (
          <div className="section" key={index}>
            <h3 className="section-title">{section.title}</h3>

            <div className="card-row">
              {section.items.map((item, i) => (
                <div className="card" key={i}>
                  <img src={item.img} alt={item.name} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="partner">

        <div className="client-section">

          <div className="client-header">
            <h2>Khách Hàng Đã Tin Tưởng</h2>
            <div className="client-line"></div>

            <p>
              Chúng tôi luôn nỗ lực thiết kế và triển khai những hệ thống tối ưu nhất,
              góp phần vào thành công chung của các doanh nghiệp.
            </p>
          </div>
          <div className="bg-animate" />

          <div className="partner-container">
            <div className="partner-grid">
              {clients.map((item, i) => (
                <div
                  className="partner-card"
                  key={i}
                >
                  <div className="card-inner">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                  <span className="shine" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PartnerPage;
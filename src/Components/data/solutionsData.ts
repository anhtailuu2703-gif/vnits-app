import type { IconKey } from "../icons/icons";

const solutionsData: {
  features: string[];
  title: string;
  titledesc: string;
  desc: string;
  image: string;
  icon: IconKey;
  overview: string;
  benefits: string[];
  slug: string;
  items?: string[];
  backgroundImage?: string;
}[] = [
  {
    title: "Hạ tầng CNTT",
    titledesc: "Tổng quan về giải pháp",
    slug: "ha-tang-cntt",
    features: [
      "Thiết kế mạng LAN/WAN tiêu chuẩn doanh nghiệp",
      "Hệ thống Wi-Fi diện rộng, roaming mượt mà",
      "Giải pháp máy chủ và lưu trữ (SAN/NAS)",
      "Ảo hóa và điện toán đám mây",
    ],
    benefits:["Tối ưu hóa hiệu suất làm việc", "Đảm bảo an toàn dữ liệu 24/7", "Dễ dàng mở rộng trong tương lai", "Tiết kiệm chi phí vận hành"],
    overview:"Chúng tôi cung cấp giải pháp thiết kế, thi công và quản trị hạ tầng CNTT toàn diện bao gồm: hệ thống mạng (LAN/WAN, Wi-Fi), máy chủ, lưu trữ, và ảo hóa. Đảm bảo hiệu năng cao, bảo mật và khả năng mở rộng linh hoạt cho doanh nghiệp của bạn.",
    desc: "Giải pháp mạng nội bộ, máy chủ và hệ thống lưu trữ toàn diện, tối ưu hóa hiệu suất cho doanh nghiệp.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",
    icon: "network",
    items: [
      "Thiết kế mạng LAN/WAN tiêu chuẩn doanh nghiệp",
      "Hệ thống Wi-Fi diện rộng, roaming mượt mà",
      "Giải pháp máy chủ và lưu trữ (SAN/NAS)",
    ],
    backgroundImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Hệ thống CCTV",
    titledesc: "Tổng quan về giải pháp",
    slug: "cctv",
    features: [
      "Camera IP chất lượng cao (4K, PTZ)",
      "Tích hợp AI nhận diện khuôn mặt và biển số",
      "Phát hiện xâm nhập và cảnh báo sớm",
      "Lưu trữ dữ liệu an toàn trên NVR/Cloud",
    ],
    overview:"Giải pháp camera giám sát an ninh thông minh (CCTV) tiên tiến nhất, ứng dụng AI để phân tích hình ảnh, nhận diện khuôn mặt, phát hiện hành vi bất thường và tự động cảnh báo. Hệ thống cung cấp khả năng giám sát từ xa mọi lúc mọi nơi.",
    benefits:["Nâng cao mức độ an ninh cho tòa nhà", "Phản ứng kịp thời với các sự cố", "Bằng chứng video rõ nét khi cần thiết","Quản lý tập trung nhiều địa điểm"],
    desc: "Giám sát an ninh 24/7 với camera AI độ nét cao, nhận diện khuôn mặt và cảnh báo xâm nhập thời gian thực.",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1000&auto=format&fit=crop",
    icon: "camera",
    items: [
      "Camera IP chất lượng cao (4K, PTZ)",
      "Tích hợp AI nhận diện khuôn mặt và biển số",
      "Phát hiện xâm nhập và cảnh báo sớm",
    ],
    backgroundImage: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Access Control",
    titledesc: "Tổng quan về giải pháp",
    slug: "access-control",
    features: [
      "Nhận diện khuôn mặt/Sinh trắc học tốc độ cao",
      "Tích hợp với hệ thống chấm công",
      "Quản lý khách truy cập (Visitor Management)",
      "Cửa phân làn (Flap Barrier/Turnstile)",
    ],
    overview: "Hệ thống kiểm soát cửa ra vào (Access Control) sử dụng các công nghệ nhận dạng tiên tiến nhất như thẻ thông minh, nhận diện khuôn mặt 3D, vân tay và smartphone. Giải pháp giúp quản lý chặt chẽ luồng người vào ra, phân quyền truy cập chi tiết.",
    benefits: ["Ngăn chặn truy cập trái phép", "Tự động hóa luồng người di chuyển", "Tích hợp liền mạch với hệ thống PCCC","Báo cáo chi tiết lịch sử ra vào"],
    desc: "Kiểm soát vào ra thông minh bằng sinh trắc học, thẻ từ và ứng dụng điện thoại, đảm bảo an ninh tuyệt đối.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
    icon: "security",
    items: [
      "Nhận diện khuôn mặt/Sinh trắc học tốc độ cao",
      "Tích hợp với hệ thống chấm công",
      "Quản lý khách truy cập",
    ],
    backgroundImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Video Door Phone",
    titledesc: "Tổng quan về giải pháp",
    slug: "video-door-phone",
    features: [
      "Màn hình cảm ứng độ phân giải cao",
      "Đàm thoại video hai chiều rõ nét",
      "Mở khóa từ xa qua ứng dụng",
      "Tích hợp camera giám sát sảnh",
    ],
    overview: "Giải pháp chuông cửa có hình (Video Door Phone) cao cấp dành cho chung cư, biệt thự. Hệ thống cho phép cư dân xem mặt, giao tiếp hai chiều với khách tại sảnh và điều khiển mở cửa từ xa qua màn hình trong nhà hoặc ứng dụng di động.",
    benefits: ["Tăng cường an ninh cho cư dân", "Tiện lợi trong giao tiếp", "Nâng tâm đẳng cấp căn hộ","Ghi hình, chụp ảnh khách đến thăm"],
    desc: "Hệ thống chuông cửa màn hình thông minh, kết nối trực tiếp với căn hộ và trung tâm điều hành.",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1000&auto=format&fit=crop",
    icon: "security",
    items: [
      "Màn hình cảm ứng độ phân giải cao",
      "Đàm thoại video hai chiều rõ nét",
      "Mở khóa từ xa qua ứng dụng",
    ],
    backgroundImage: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Car Parking",
    titledesc: "Tổng quan về giải pháp",
    slug: "car-parking",
    features: [
      "Nhận diện biển số tự động (ALPR)",
      "Thanh toán điện tử hạn chế tiền mặt",
      "Hệ thống thu phí tự động (ETC)",
      "Biển báo LED hướng dẫn đỗ xe",
    ],
    overview: "Hệ thống bãi giữ xe thông minh ứng dụng công nghệ nhận diện biển số tự động (ALPR) kết hợp thẻ từ. Giải pháp bao gồm trạm kiểm soát vào ra, hệ thống báo vị trí trống, camera giám sát toàn cảnh và phần mềm quản lý doanh thu chặt chẽ.",
    benefits: ["Giảm thiểu ùn tắc tại cổng", "Ngăn chặn mất cắp phương tiện", "Tối ưu doanh thu, tránh thất thoát", "Trải nghiệm đỗ xe chuyên nghiệp"],
    desc: "Quản lý bãi đỗ xe tự động, nhận diện biển số (ALPR) và hướng dẫn vị trí đỗ thông minh.",
    image:
      "https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?q=80&w=1000&auto=format&fit=crop",
    icon: "security",
    items: [
      "Nhận diện biển số tự động (ALPR)",
      "Thanh toán điện tử hạn chế tiền mặt",
      "Hệ thống thu phí tự động (ETC)",
    ],
    backgroundImage: "https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Hệ thống âm thanh thông báo (PA)",
    titledesc: "Tổng quan về giải pháp",
    slug: "pa-system",
    features: [
      "Phân vùng âm thanh linh hoạt",
      "Phát nhạc nền tự động theo lịch",
      "Tích hợp chặt chẽ với hệ thống báo cháy",
      "Hệ thống micro chọn vùng từ xa",
    ],
    overview: "Hệ thống âm thanh thông báo công cộng (PA - Public Address) chuyên nghiệp, đáp ứng đa dạng yêu cầu từ việc phát nhạc nền thư giãn (BGM) đến phát thông báo, tìm người, và đặc biệt quan trọng là kết nối với hệ thống báo cháy để phát lời cảnh báo di tản tự động.",
    benefits: ["Truyền đạt thông tin nhanh chóng", "Hướng dẫn thoát hiểm an toàn", "Tạo môi trường âm thanh dễ chịu", "Hoạt động bền bỉ trong môi trường khắc nghiệt"],
    desc: "Hệ thống âm thanh thông báo (PA) cho phép phát âm thanh đến các khu vực khác nhau trong tòa nhà hoặc khu vực rộng.",
    image:
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=1000&auto=format&fit=crop",
    icon: "security",
    items: [
      "Phân vùng âm thanh linh hoạt",
      "Phát nhạc nền tự động theo lịch",
      "Tích hợp chặt chẽ với hệ thống báo cháy",
    ],
    backgroundImage: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Hệ thống Âm thanh ánh sáng (Audio Visual)",
    titledesc: "Tổng quan về giải pháp",
    slug: "audio-visual",
    features: [
      "Hệ thống loa Line Array công suất lớn",
      "Màn hình hiển thị LED ghép tấm, Projector",
      "Hệ thống ánh sáng sân khấu (Moving head, Par LED)",
      "Hệ thống hội nghị truyền hình trực tuyến",
    ],
    overview: "Chuyên cung cấp tổng thể giải pháp Âm thanh, Ánh sáng và Hiển thị hình ảnh (Audio Visual) chuyên nghiệp cho các hội trường lớn, phòng họp trực tuyến, phòng hội nghị, và các khu vực giải trí đa năng. Chúng tôi cam kết mang đến trải nghiệm nghe nhìn hoàn hảo.",
    benefits: ["Chất lượng âm thanh trung thực", "Hình ảnh sắc nét, màu sắc sống động", "Tăng hiệu quả các buổi họp, hội thảo", "Giao diện điều khiển cảm ứng trực quan"],
    desc: "Hệ thống âm thanh và ánh sáng chuyên dụng cho các sự kiện, hội nghị và không gian công cộng.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop",
    icon: "security",
    items: [
      "Hệ thống loa Line Array công suất lớn",
      "Màn hình hiển thị LED ghép tấm, Projector",
      "Hệ thống ánh sáng sân khấu (Moving head, Par LED)",
    ],
    backgroundImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop",
  },
];

// const solutions = [

//   {
//     title: "Hạ tầng CNTT",
//     slug:"ha-tang-cntt",
//     image:
//       "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",
//     icon: "network" as IconKey,
//     desc: "Giải pháp mạng nội bộ, máy chủ và hệ thống lưu trữ toàn diện, tối ưu hóa hiệu suất cho doanh nghiệp.",
//     items: [
//       "Thiết kế mạng LAN/WAN tiêu chuẩn doanh nghiệp",
//       "Hệ thống Wi-Fi diện rộng, roaming mượt mà",
//       "Giải pháp máy chủ và lưu trữ (SAN/NAS)",
//     ],
//   },

//   {
//     title: "Hệ thống CCTV",
//     image:
//       "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1000&auto=format&fit=crop",
//     icon: "camera" as IconKey,
//     desc: "Giám sát an ninh 24/7 với camera AI độ nét cao, nhận diện khuôn mặt và cảnh báo xâm nhập thời gian thực.",
//     items: [
//       "Camera IP chất lượng cao (4K, PTZ)",
//       "Tích hợp AI nhận diện khuôn mặt và biển số",
//       "Phát hiện xâm nhập và cảnh báo sớm",
//     ],
//   },

//   {
//     title: "Access Control",
//     image:
//       "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
//     icon: "security" as IconKey,
//     desc: "Kiểm soát vào ra thông minh bằng sinh trắc học, thẻ từ và ứng dụng điện thoại.",
//     items: [
//       "Nhận diện khuôn mặt/Sinh trắc học tốc độ cao",
//       "Tích hợp với hệ thống chấm công",
//       "Quản lý khách truy cập",
//     ],
//   },

//   {
//     title: "Video Door Phone",
//     image:
//       "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1000&auto=format&fit=crop",
//     icon: "video" as IconKey,
//     desc: "Hệ thống chuông cửa màn hình thông minh, kết nối trực tiếp với căn hộ và trung tâm điều hành.",
//     items: [
//       "Màn hình cảm ứng độ phân giải cao",
//       "Đàm thoại video hai chiều rõ nét",
//       "Mở khóa từ xa qua ứng dụng",
//     ],
//   },
//   {
//     title: "Car Parking",
//     image:
//       "https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?q=80&w=1000&auto=format&fit=crop",
//     icon: "car" as IconKey,
//     desc: "Quản lý bãi đỗ xe tự động, nhận diện biển số (ALPR) và hướng dẫn vị trí đỗ thông minh.",
//     items: [
//       "Nhận diện biển số tự động (ALPR)",
//       "Thanh toán điện tử hạn chế tiền mặt",
//       "Hệ thống thu phí tự động (ETC)",
//     ],
//   },
//   {
//     title: "Hệ thống âm thanh thông báo (PA)",
//     image:
//       "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=1000&auto=format&fit=crop",
//     icon: "🔊" as IconKey,
//     desc: "Hệ thống âm thanh thông báo (PA) giúp truyền tải thông tin nhanh chóng và hiệu quả trong các không gian công cộng.",
//     items: [
//       "Phân vùng âm thanh linh hoạt",
//       "Phát nhạc nền tự động theo lịch",
//       "Tích hợp chặt chẽ với hệ thống báo cháy",
//     ],
//   },
//   {
//     title: "Hệ thống Âm thanh ánh sáng (Audio Visual)",
//     image:
//       "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop",
//     icon: "🎥" as IconKey,
//     desc: "Giải pháp âm thanh hội trường, hiển thị hình ảnh, phòng họp trực tuyến và ánh sáng sân khấu chuyên nghiệp.",
//     items: [
//       "Hệ thống loa Line Array công suất lớn",
//       "Màn hình hiển thị LED ghép tấm, Projector",
//       "Tích hợp chặt chẽ với hệ thống báo cháy",
//     ],
//   },
// ];

export default solutionsData;

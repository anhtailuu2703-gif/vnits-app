import { useState } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import "./ContactPage.css";
import { section } from "framer-motion/m";

type FormType = {
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
};

export default function ContactPage() {
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState<FormType>({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    });

    const [errors, setErrors] = useState<Partial<FormType>>({});

    const validate = () => {
        const err: Partial<FormType> = {};

        if (!form.name.trim()) err.name = "Vui lòng nhập họ tên";
        if (!form.email || !/\S+@\S+\.\S+/.test(form.email))
            err.email = "Email không hợp lệ";
        if (!form.phone.trim()) err.phone = "Vui lòng nhập số điện thoại";
        if (!form.message.trim()) err.message = "Vui lòng nhập nội dung";

        setErrors(err);
        return Object.keys(err).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validate()) {
            toast.error("Vui lòng kiểm tra lại thông tin ❌");
            return;
        }

        try {
            setLoading(true);

            await emailjs.send(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                form,
                "YOUR_PUBLIC_KEY"
            );

            toast.success("Gửi yêu cầu thành công 🚀");

            setForm({
                name: "",
                email: "",
                phone: "",
                company: "",
                message: "",
            });
        } catch (err) {
            toast.error("Gửi thất bại ❌");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="contact">
            <Toaster position="top-right" />

            <div className="contact-container">
                {/* LEFT */}
                <div className="contact-left">
                    <h2>Liên hệ với chúng tôi</h2>
                    <p>
                        VNITS cung cấp giải pháp công nghệ toàn diện cho doanh nghiệp.
                        Hãy để lại thông tin, chúng tôi sẽ liên hệ ngay.
                    </p>

                    <div className="contact-info">
                        <p>📍 TP.HCM</p>
                        <p>📞 0909 999 999</p>
                        <p>✉️ contact@vnits.vn</p>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="contact-right">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <h3 className="form-title">Gửi yêu cầu trực tuyến</h3>

                        <div className="form-grid">
                            {/* LEFT COL */}
                            <div className="form-col">
                                <Input
                                    label="Họ và tên"
                                    value={form.name}
                                    error={errors.name}
                                    onChange={(v) => setForm({ ...form, name: v })}
                                />

                                <Input
                                    label="Email"
                                    value={form.email}
                                    error={errors.email}
                                    onChange={(v) => setForm({ ...form, email: v })}
                                />
                            </div>

                            {/* RIGHT COL */}
                            <div className="form-col">
                                <Input
                                    label="Số điện thoại"
                                    value={form.phone}
                                    error={errors.phone}
                                    onChange={(v) => setForm({ ...form, phone: v })}
                                />

                                <Input
                                    label="Tên công ty"
                                    value={form.company}
                                    onChange={(v) => setForm({ ...form, company: v })}
                                />
                            </div>
                        </div>

                        {/* TEXTAREA */}
                        <TextArea
                            label="Nội dung yêu cầu"
                            value={form.message}
                            error={errors.message}
                            onChange={(v) => setForm({ ...form, message: v })}
                        />

                        <button type="submit" disabled={loading}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-send w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                            {loading ? "Đang gửi..." : "Gửi yêu cầu tư vấn"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

/* INPUT COMPONENT */
type InputProps = {
    label: string;
    value: string;
    onChange: (v: string) => void;
    error?: string;
};

function Input({ label, value, onChange, error }: InputProps) {
    return (
        <div className={`form-group ${error ? "error" : ""}`}>
            <input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required
            />
            <label>{label}</label>
            {error && <span className="error-text">{error}</span>}
        </div>
    );
}

/* TEXTAREA COMPONENT */
function TextArea({ label, value, onChange, error }: InputProps) {
    return (
        <div className={`form-group full ${error ? "error" : ""}`}>
            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required
                rows={4}
            />
            <label>{label}</label>
            {error && <span className="error-text">{error}</span>}
        </div>
    );
}
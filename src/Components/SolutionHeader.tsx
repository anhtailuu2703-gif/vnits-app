// components/SolutionHeader.tsx
import { Link } from "react-router";
import { iconMap } from "./icons/icons";
import "./Styles/SolutionHeader.css";

interface Props {
    title: string;
    desc: string;
    bg: string;
    icon?: string;
}

export default function SolutionHeader({ title, desc, bg, icon }: Props) {
    const Icon = icon ? iconMap[icon as keyof typeof iconMap] : null;
    return (
        <section
            className="solution-header"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="solution-header-overlay" />

            <div className="solution-header-container">
                <div className="solution-header-content">
                    
                    <Link className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-medium mb-8" to="/vnits#system" data-discover="true" style={{ textDecoration: "none", paddingBottom: "30px" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-left w-4 h-4" aria-hidden="true">
                            <path d="m12 19-7-7 7-7"></path>
                            <path d="M19 12H5"></path>
                        </svg>
                        TRỞ VỀ DANH SÁCH
                    </Link>
                    {Icon && (
                        <div className="solution-header-icon">
                            <Icon size={22}/>
                        </div>
                    )}
                    <h1>{title}</h1>
                    <p>{desc}</p>
                </div>
            </div>
        </section>
    );
}
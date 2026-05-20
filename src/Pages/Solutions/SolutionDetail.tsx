// pages/SolutionDetail.tsx
import { useParams } from "react-router-dom";
import solutionsData from "../../Components/data/solutionsData";
import SolutionHeader from "../../Components/SolutionHeader";
import SolutionContent from "../../Components/SolutionContent";

export default function SolutionDetail() {
    const { slug } = useParams();
    const solution = solutionsData.find((i) => i.slug === slug);

    if (!solution) return null;

    return (
        <>
            {/* HEADER */}
            <SolutionHeader
                icon={solution.icon}
                title={solution.title}
                desc={solution.desc}
                bg={solution.image}
            />

            <SolutionContent
                slug={solution.slug}
                titleDesc={solution.titledesc ?? ""}
                overview={solution.overview ?? ""}
                features={solution.features ?? []}
                benefits={solution.benefits ?? []}
            />
        </>
    );
}
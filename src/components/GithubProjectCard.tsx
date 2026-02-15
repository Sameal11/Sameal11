import { useGithubRepo } from "../hooks/useGithubRepo";
import TiltedCard from "./TiltedCard";
import { Star, Github } from "lucide-react";

interface GithubProjectCardProps {
    title: string;
    image: string;
    desc: string; // Fallback description
    tech: string[]; // Fallback tech
    github?: string; // GitHub Repo URL
    live?: string;
}

export default function GithubProjectCard({
    title,
    image,
    desc,
    tech,
    github,
    live,
}: GithubProjectCardProps) {
    const { data } = useGithubRepo(github);

    // Use GitHub data if available, otherwise fallback
    const finalDesc = data?.description || desc;

    // Combine manual tech (if any) with GitHub topics, removing duplicates
    // Limit to 5 tags to prevent overflow
    const githubTopics = data?.topics || [];
    const finalTech = githubTopics.length > 0
        ? githubTopics.slice(0, 5)
        : tech;

    return (
        <TiltedCard
            imageSrc={image}
            altText={title}
            captionText={title}
            containerHeight="500px"
            containerWidth="100%"
            imageHeight="500px"
            imageWidth="100%"
            rotateAmplitude={10}
            scaleOnHover={1.06}
            showMobileWarning={false}
            showTooltip
            displayOverlayContent
            overlayContent={
                <div className="p-5 text-white bg-black border border-white/10 rounded-xl shadow-2xl h-full flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold tracking-tight">{title}</h3>
                        {data && (
                            <div className="flex items-center gap-1 text-xs font-mono text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded">
                                <Star className="w-3 h-3 fill-yellow-500" />
                                {data.stargazers_count}
                            </div>
                        )}
                    </div>

                    <p className="text-sm mb-4 text-gray-400 font-light leading-relaxed flex-grow line-clamp-3">
                        {finalDesc}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {finalTech.length > 0 ? (
                            finalTech.map((t, idx) => (
                                <span
                                    key={idx}
                                    className="px-2 py-1 border border-white/10 rounded text-[10px] uppercase tracking-wider text-gray-400 font-mono"
                                >
                                    {t}
                                </span>
                            ))
                        ) : (
                            <span className="text-xs text-gray-600 font-mono">No tags found</span>
                        )}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 text-sm mt-auto">
                        {github && (
                            <a
                                href={github}
                                target="_blank"
                                className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors bg-white/5 border border-white/10 px-3 py-2 rounded-lg"
                            >
                                <Github className="w-4 h-4" />
                                <span>Code</span>
                            </a>
                        )}
                        {live && (
                            <a
                                href={live}
                                target="_blank"
                                className="flex items-center gap-2 bg-white text-black px-3 py-2 rounded-lg font-bold hover:bg-gray-200 transition-colors"
                            >
                                <span>Live Demo</span>
                            </a>
                        )}
                    </div>
                </div>
            }
        />
    );
}

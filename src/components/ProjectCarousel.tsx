import React from "react";

interface Project {
    id: number;
    name: string;
    img: string;
}

const projects: Project[] = [
    { id: 1, name: "Project One", img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511" },
    { id: 2, name: "Project Two", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
    { id: 3, name: "Project Three", img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed" },
    { id: 4, name: "Project Four", img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511" },
    { id: 5, name: "Project Five", img: "https://images.unsplash.com/photo-1554995207-c18c203602cb" },
    { id: 6, name: "Project Six", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36" },
    { id: 7, name: "Project Seven", img: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353" },
    { id: 8, name: "Project Eight", img: "https://hips.hearstapps.com/hmg-prod/images/screen-shot-2024-01-25-at-12-12-51-pm-65b29696e9721.png?crop=0.752xw:1.00xh;0.103xw,0&resize=1120:*" },
    { id: 9, name: "Project One", img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511" },
    { id: 10, name: "Project Two", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
    { id: 11, name: "Project Three", img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed" },
    { id: 12, name: "Project Four", img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511" },
    { id: 13, name: "Project Five", img: "https://images.unsplash.com/photo-1554995207-c18c203602cb" },
    { id: 14, name: "Project Six", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36" },
    { id: 15, name: "Project Seven", img: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353" },
    { id: 16, name: "Project Eight", img: "https://hips.hearstapps.com/hmg-prod/images/screen-shot-2024-01-25-at-12-12-51-pm-65b29696e9721.png?crop=0.752xw:1.00xh;0.103xw,0&resize=1120:*" },
];

interface CarouselRowProps {
    reverse?: boolean;
}

const CarouselRow: React.FC<CarouselRowProps> = ({ reverse }) => {
    return (
        <div
            className="overflow-hidden relative w-full">
            <div className={`flex gap-4 ${reverse ? "animate-marqueeRight" : "animate-marqueeLeft"
                }`}
            >
                {[...projects, ...projects].map((project, index) => (
                    <div
                        key={`${project.id}-${index}`}
                        className="flex-shrink-0 w-1/3 sm:w-1/4 lg:w-1/6 h-[100px] sm:h-[120px] lg:h-[140px] bg-white shadow-md rounded-md p-2 overflow-hidden"
                    >
                        <img
                            src={project.img + "?auto=format&fit=crop&w=700&h=350&q=80"}
                            alt={project.name}
                            className="rounded-md w-full h-full object-cover"
                        />
                        <p className="text-center text-sm mt-2">{project.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ProjectCarousel: React.FC = () => {
    return (
        <div className="space-y-6 py-8">
            {/* First row */}
            <CarouselRow reverse={false} />
            {/* Second row (opposite direction) */}
            <CarouselRow reverse={true} />
        </div>
    );
};

export default ProjectCarousel;
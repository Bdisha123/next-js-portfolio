import React from "react";
import ProjectCard from "../sub/ProjectCard"

const Projects = () => {
    return (
        <div
            className="flex flex-col items-center justify-center pt-2 pb-20"
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Projects
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
                <ProjectCard
                    src="/p1.png"
                    title="Blog App"
                    skills="Skills : NextJS, Prisma, Mongodb "
                    url = "https://nextjs-blog-app-umber.vercel.app/"
                    description=""

                />
                <ProjectCard
                    src="/p2.png"
                    title="Real Time Chat Application"
                    skills="Skill :  ReactJS, Node JS, Express jS, Firebase, SASS"
                    url="https://clinquant-douhua-14bda4.netlify.app/"
                    description=""
                />
                <ProjectCard
                    src="/p3.png"
                    title="Fiverr Webbsite clone"
                    skills="Skills: ReactJS, SASS"
                    url="https://idyllic-panda-ba1909.netlify.app/"
                    description=""
                />
                <ProjectCard
                    src="/p4.png"
                    title="React.js Portfolio"
                    skills="Skills: ReactJS, Node JS,Express jS, Nodemailer,SASS"
                    url="https://portfolio-react-gtkw.onrender.com/"
                    description=""
                />
                <ProjectCard
                    src="/p5.png"
                    title="NextJS Portfolio"
                    skills="Skills: NextJS, Typescript, Framer motion, Three.js "
                    url="https://next-js-portfolio-sable.vercel.app/"
                    description=""
                />
                <ProjectCard
                    src="/p6.png"
                    title="US Election Data Analysis"
                    skills="Skills: MySQL, ReactJS"
                    url="https://github.com/Bdisha123/us-election"
                    description=""
                />
            </div>
        </div>
    );
};

export default Projects;
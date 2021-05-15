import { IProject } from "@/models";
import Image from "next/image";
import * as React from "react";

interface IProjectCardProps {
  project: IProject;
}

export const ProjectCard: React.FC<IProjectCardProps> = ({ project }) => {
  return (
    <a
      rel="noopener noreferrer"
      href={project.href}
      target="_blank"
      className="flex flex-col p-4 mb-4 transition-all border border-gray-300 rounded-md cursor-pointer dark:border-gray-800 hover:shadow-md"
    >
      <div className="flex items-start">
        <div className="mr-4 min-w-[50px] w-[50px] h-[50px]">
          <Image
            src={project.img}
            width={200}
            height={200}
            alt={project.title}
          />
        </div>
        <div>
          <h3 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
            {project.title}
          </h3>
          <p className="leading-5 text-gray-700 dark:text-gray-300">
            {project.description}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center mt-4">
        {project.tags.map((tag, index) => (
          <span
            className="rounded-full mr-2 text-gray-900 text-xs min-w-[48px] flex justify-center items-center py-1 px-3 mb-2 bg-indigo-200 dark:bg-gray-300"
            key={index}
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
};

import { ForkIcon, RepoIcon, StarIcon, WatchIcon } from "@/components";
import { IRepo } from "@/models";
import * as React from "react";

interface IRepoCardProps {
  repo: IRepo;
}

export const RepoCard: React.FC<IRepoCardProps> = React.memo(({ repo }) => {
  return (
    <div className="flex flex-col p-4 border border-gray-500 rounded">
      <div className="flex flex-col flex-grow">
        <div className="flex items-start">
          <RepoIcon className="w-4 h-4 mt-1 mr-2 min-w-[16px] text-gray-700 dark:text-gray-400" />
          <a
            href={repo.html_url}
            className="text-base font-semibold leading-tight tracking-wide text-black dark:text-gray-200 hover:underline"
          >
            {repo.full_name}
          </a>
        </div>
        {repo.description !== null && (
          <p className="mt-4 text-sm text-gray-700 dark:text-gray-400">
            {repo.description}
          </p>
        )}
      </div>
      <div className="flex items-center mt-4 space-x-4">
        <span className="flex items-center">
          <WatchIcon className="w-4 h-4 mr-1 min-w-[16px] text-gray-700 dark:text-gray-400" />
          {repo.watchers_count}
        </span>
        <span className="flex items-center">
          <StarIcon className="w-4 h-4 mr-1 min-w-[16px] text-gray-700 dark:text-gray-400" />
          {repo.stargazers_count}
        </span>
        <span className="flex items-center">
          <ForkIcon className="w-4 h-4 mr-1 min-w-[16px] text-gray-700 dark:text-gray-400" />
          {repo.forks_count}
        </span>
      </div>
    </div>
  );
});

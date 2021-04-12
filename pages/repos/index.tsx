import { Loader, Page, RepoCard, Searchbar } from "@/components";
import React, { useEffect } from "react";

interface IReposProps {}

const Repos: React.FC<IReposProps> = () => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [repos, setRepos] = React.useState<any[]>([]);
  const [filteredRepos, setFilteredRepos] = React.useState<any[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const reposJson = await fetch("/api/repos");
        const _repos = await reposJson.json();
        setRepos(_repos.repos);
        setFilteredRepos(_repos.repos);
        setLoading(false);
      } catch (err) {
        console.log("repos fetch error", err);
        setLoading(false);
      }
    })();
  }, []);

  const onSearchChange = (v: string) => {
    if (v.length === 0) setFilteredRepos(repos);
    else {
      let newFilteredRepos = [...repos];
      newFilteredRepos = newFilteredRepos.filter((repo) =>
        repo.full_name.toLowerCase().includes(v.toLowerCase()),
      );
      setFilteredRepos(newFilteredRepos);
    }
  };

  return (
    <Page title="Repos - Yağızhan Avcı">
      <h1 className="mb-4 text-2xl font-bold tracking-tight text-black my-7 md:text-3xl dark:text-white">
        All Repositories ({filteredRepos.length})
      </h1>
      <Searchbar onChange={onSearchChange} placeholder="Search repos" />
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-flow-row-dense gap-4 mt-6 mb-8 auto-rows-fr grid-rows-auto-rows-auto sm:grid-cols-1 md:grid-cols-2">
          {filteredRepos.map((repo, index) => (
            <RepoCard repo={repo} key={index} />
          ))}
          {filteredRepos.length === 0 && (
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              No repos found.
            </p>
          )}
        </div>
      )}
    </Page>
  );
};

export default Repos;

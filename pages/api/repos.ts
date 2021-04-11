import { NextApiRequest, NextApiResponse } from "next";

const fetchRepos = async (_: NextApiRequest, res: NextApiResponse) => {
  const userReposResponse = await fetch(
    "https://api.github.com/users/yagizhanavci/repos?per_page=100",
  );
  const repositories = await userReposResponse.json();
  const mine = repositories.filter((repo: any) => !repo.fork);

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1200, stale-while-revalidate=600",
  );

  return res.status(200).json({
    repos: mine,
  });
};

export default fetchRepos;

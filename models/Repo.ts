export interface IRepo {
  html_url: string;
  full_name: string;
  description: string | null;
  watchers_count: number;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

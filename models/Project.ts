export type ILocalizedProjects = Record<string, IProject[]>;

export interface IProject {
  title: string;
  description: string;
  tags: string[];
  img: string;
  href?: string;
}

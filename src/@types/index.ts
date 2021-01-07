export interface APIUser {
  login: string;
  name: string;
  followers: number;
  following: number;
  avatar_url: string;
  location?: string;
  company?: string;
  email?: string;
  blog?: string;
}

export interface APIRepo {
  name: string;
  html_url: string;
  description?: string;
  language?: string;
  stargazers_count: number;
  forks: number;
}

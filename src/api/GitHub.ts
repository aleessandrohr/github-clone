const basicFetch = async (url: string) => {
  const req = await fetch(`${url}`);
  if (req.status === 404) {
    return req.status
  }
  const json = await req.json();
  return json;
}

export const getUser = async (username: string) => {
  return await basicFetch(`https://api.github.com/users/${username}`);
      
}

export const getRepos = async (username: string) => {
  return await basicFetch(`https://api.github.com/users/${username}/repos`);
}

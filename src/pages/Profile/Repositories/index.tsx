import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Error404 from "../../../components/Error404/index";
import RepositoryCard from "../../../components/RepositoryCard/index";

import { getRepository } from "../../../api/github";

import { APIRepository } from "../../../types";

import { Container, Repositories2 } from "./styles";

interface Data {
  repository?: APIRepository[];
  error?: boolean;
}

const Repositories: React.FC = () => {
  const [data, setData] = useState<Data>();
  const { username } = useParams();

  useEffect(() => {
    const get = async () => {
      const repository = await getRepository(username);

      if (repository === `Error 404`) {
        setData({ error: true });
      } else {
        setData({
          repository,
        });
      }
    };

    get();
  }, [username]);

  if (data?.error) {
    return <Error404 />;
  }

  if (!data?.repository) {
    return <div />;
  }

  return (
    <Container>
      <Repositories2>
        <div>
          {data.repository.map((item) => (
            <RepositoryCard
              key={item.name}
              repositoryName={item.name}
              html_url={item.html_url}
              description={item.description}
              language={item.language}
              stars={item.stargazers_count}
              forks={item.forks}
            />
          ))}
        </div>
      </Repositories2>
    </Container>
  );
};

export default Repositories;

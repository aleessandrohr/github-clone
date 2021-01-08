import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getRepository } from "../../../api/GitHub";

import { APIRepository } from "../../../@types";

import RepositoryCard from "../../../components/RepositoryCard/index";
import RandomCalendar from "../../../components/RandomCalendar/index";
import Error404 from "../../../components/Error404/index";

import { Container, Repositories, CalendarHeading } from "./styles";

interface Data {
  repository?: APIRepository[];
  error?: boolean;
}

const Overview: React.FC = () => {

  const [data, setData] = useState<Data>();
  const { username } = useParams();

  useEffect(() => {
    const get = async () => {
      let repository = await getRepository(username);
      if (repository === `Error 404`) {
        setData({ error: true });
      } else {

        const shuffledRepository = repository.sort(() => 0.5 - Math.random());
        const slicedRepository = shuffledRepository.slice(0, 6);

        setData({
          repository: slicedRepository,
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
      <Repositories>
        <h1>Random repositories</h1>
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
      </Repositories>
      <CalendarHeading>
        Random Calendar (do not represent actual data)
      </CalendarHeading>
      <RandomCalendar />
    </Container>
  );
};

export default Overview;

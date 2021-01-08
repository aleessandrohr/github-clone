import React from 'react';

import { Container, TopSide, RepositoryIcon, BotSide, StarIcon, ForkIcon } from './styles';

interface Props {
  repositoryName: string;
  html_url: string;
  description?: string;
  language?: string;
  stars: number;
  forks: number
}

const RepositoryCard: React.FC<Props> = ({
  repositoryName,
  html_url,
  description,
  language,
  stars,
  forks,
}) => {

  const languageClass = language ? language.toLowerCase() : 'other';

  return(
    <Container>
      <TopSide>
        <header>
          <RepositoryIcon />
            <a href={html_url} target='_blank' rel="noreferrer">{repositoryName}</a>
        </header>
        <section>
          <p>{description}</p>
        </section>
      </TopSide>
      <BotSide>
        <ul>
          <li>
            <div className={`language ${languageClass}`}></div>
            <span>{language ? language : 'Other'}</span>
          </li>
          <li>
            <StarIcon />
            <span>{stars}</span>
          </li>
          <li>
            <ForkIcon />
            <span>{forks}</span>
          </li>
        </ul>
      </BotSide>
    </Container>
  );
}

export default RepositoryCard;

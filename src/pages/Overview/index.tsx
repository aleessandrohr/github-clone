import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ProfileData from '../../components/ProfileData/index';
import OverviewCard from '../../components/OverviewCard/index';
import RandomCalendar from '../../components/RandomCalendar/index';
import Error404 from '../../components/Error404/index';
import Loading from '../../components/Loading/index';

import { Container, Main, LeftSide, RightSide, Repositories, CalendarHeading, Tab } from './styles';

import { getUser, getRepos } from '../../api/GitHub';

import { APIRepo, APIUser } from '../../@types';

interface Data {
  user?: APIUser,
  repos?: APIRepo[],
  error?: boolean;
}

const Profile: React.FC = () => {

  const { username = 'alessandrohenriqueramos' } = useParams();

  const [data, setData] = useState<Data>();

  useEffect(() => {
    const get = async () => {
      let user = await getUser(username);
      let repos = await getRepos(username);
      if (user === 404 || repos === 404) {
        setData({ error: true })
      } else {
        const shuffledRepos = repos.sort(() => 0.50 - Math.random())
        const slicedRepos = shuffledRepos.slice(0, 6)

        setData({
          user,
          repos: slicedRepos,
        })
      }
    }

    get()
  }, [username]);

  if (data?.error) {
    return(
      <Error404 />
    );
  }

  if (!data?.user || !data?.repos) {
    return(
      <Loading />
    );
  }

  const TabContent = () => {
    return(
      <div className='content'>
        <span style={{cursor: 'pointer'}} className="label">Overview</span>
      </div>
    );
  }

  return(
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>
        <span className="line" />
      </Tab>
      <Main>
        <LeftSide>
          <ProfileData
            username={data.user.login}
            name={data.user.name}
            avatar_url={data.user.avatar_url}
            followers={data.user.followers}
            following={data.user.following}
            company={data.user.company}
            location={data.user.location}
            email={data.user.email}
            blog={data.user.blog}
          />
        </LeftSide>
        <RightSide>

          <Tab className='mobile'>
            <TabContent />
            <span className="line" />
          </Tab>

          <Repositories>
            <h1>Random repositories</h1>

            <div>
              {data.repos.map(item => (
                <OverviewCard
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
        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;

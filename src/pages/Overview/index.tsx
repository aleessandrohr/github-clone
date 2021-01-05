import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


import ProfileData from '../../components/ProfileData/index';

import { Container, Main, LeftSide, RightSide } from './styles';

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
      if (user === 404) {
        setData({ error: true })
      } else {
        setData({
          user,
          repos,
        })
      }
    }

    get()
  }, [username]);

  if (data?.error) {
    return <h1>Erro</h1>
  }

  if (!data?.user || !data.repos) {
    return <h1>Loading...</h1>
  }

  return(
    <Container>
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

        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;

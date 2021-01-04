import React from 'react';

import { Container, Main, LeftSide, RightSide } from './styles';

import ProfileData from '../../components/ProfileData/index';

const Profile: React.FC = () => {
  return(
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={'alessandrohenriqeuramos'}
            name={'Alessandro Ramos'}
            avatarUrl={'https://avatars0.githubusercontent.com/u/70819804?v=4'}
            followers={0}
            following={0}
            company={'Nenhum'}
            location={'São Luís, Brazil'}
            email={'toprime13@gmail.com'}
            blog={'Nenhum'}
          />
        </LeftSide>
        <RightSide>
          
        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;

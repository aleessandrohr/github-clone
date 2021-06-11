import React, { useState, useEffect } from "react";
import { Outlet, useParams, Link } from "react-router-dom";

import Error404 from "../../components/Error404/index";
import ProfileData from "../../components/ProfileData/index";

import { getUser } from "../../api/github";

import { APIUser } from "../../types";

import { Container, Main, LeftSide, RightSide, Tab } from "./styles";

interface Data {
  user?: APIUser;
  error?: boolean;
}

const Profile: React.FC = () => {
  const [data, setData] = useState<Data>();
  const { username } = useParams();

  useEffect(() => {
    const get = async () => {
      const user = await getUser(username);

      if (user === `Error 404`) {
        setData({ error: true });
      } else {
        setData({
          user,
        });
      }
    };

    get();
  }, [username]);

  if (data?.error) {
    return <Error404 />;
  }

  if (!data?.user) {
    return <div />;
  }

  const location = window.location.href.split("/")[4];

  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <div
            style={{ borderBottom: location ? "" : "2px solid var(--orange)" }}
            className="content"
          >
            <Link
              style={{ cursor: "pointer" }}
              className="label"
              to={`/${username}`}
            >
              Overview
            </Link>
          </div>
          <div
            style={{ borderBottom: location ? "2px solid var(--orange)" : "" }}
            className="content"
          >
            <Link
              style={{ cursor: "pointer" }}
              className="label"
              to={`/${username}/repositories`}
            >
              Repositories
            </Link>
          </div>
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
          <Tab className="mobile">
            <div style={{ display: "flex" }}>
              <div
                style={{
                  borderBottom: location ? "" : "2px solid var(--orange)",
                }}
                className="content"
              >
                <Link
                  style={{ cursor: "pointer" }}
                  className="label"
                  to={`/${username}`}
                >
                  Overview
                </Link>
              </div>
              <div
                style={{
                  borderBottom: location ? "2px solid var(--orange)" : "",
                }}
                className="content"
              >
                <Link
                  style={{ cursor: "pointer" }}
                  className="label"
                  to={`/${username}/repositories`}
                >
                  Repositories
                </Link>
              </div>
            </div>
            <span className="line" />
          </Tab>
          <Outlet />
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;

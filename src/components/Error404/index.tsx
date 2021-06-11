import React from "react";

import { Container } from "./styles";

const Error404: React.FC = () => {
  return (
    <Container>
      <h1>Error 404</h1>
      <div>
        <p>This is not the webpage you are looking for</p>
      </div>
    </Container>
  );
};

export default Error404;

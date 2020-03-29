// import Image from 'gatsby-image';

import { Link } from 'gatsby';
import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

const Boton = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: rgba(44, 62, 80, 0.85);
  width: 100%;
  color: #ffffff;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  max-width: 200px;
`;

const HabitacionPreview = ({ habitacion }) => {
  const {
    contenido,
    // imagen,
    titulo,
    slug,
  } = habitacion;
  return (
    <div
      css={css`
        border: 1px solid #e1e1e1;
        margin-bottom: 1rem;
      `}
    >
      {/* <Image fluid={imagen.fluid} /> */}
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          padding: 2rem;
          height: 100%;
        `}
      >
        <h3>{titulo}</h3>
        <p>{contenido}</p>
        <Boton to={slug}>Ver Habitacion</Boton>
      </div>
    </div>
  );
};

export default HabitacionPreview;

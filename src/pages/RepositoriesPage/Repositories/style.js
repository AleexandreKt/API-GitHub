import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0,1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media screen and (max-width: 575px) {
    grid-template-columns: auto;
  }
`;

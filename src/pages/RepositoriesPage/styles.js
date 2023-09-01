import styled from 'styled-components';

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Container = styled.main`
  display: flex;
  min-height: 100vh;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.aside`
  background: ${(props) => props.theme.colors.background};
  min-width: 20rem;
  max-height: 100vh;
  overflow-y: hidden; // barra lateral
`;

export const Main = styled.section`
  background: ${(props) => props.theme.colors.container};
  width: 100%;
  flex: 1;
  height: 100vh;
  padding: 40px;
  overflow-y: hidden;

  @media screen and (max-width: 768px) {
    height: 100%;
  }

  @media screen and (max-width: 575px) {
    padding: 40px 20px;
  }
`;

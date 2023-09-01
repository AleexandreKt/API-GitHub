import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 0.2rem;
  margin: auto;
  padding-right: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: auto auto;
    gap: 0.8rem;
    padding: 0.1rem;
  }
`;
// filtro de cores
export const Selector = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.colors.container};
  color: ${(props) => props.color || props.theme.colors.text};// ou ele assume a cor que ja esta configurada ou a colors.text
  width: 100%;
  min-height: 2rem;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: background 0.3s, transform 0.3s;
  padding: 0 1rem;

  &:hover,
  &.selected {
  background: ${(props) => props.color || props.theme.colors.gray200};
  color: ${(props) =>
    props.color ? props.theme.colors.whithe : props.theme.colors.indigo};
  transform: translateX(5px) scale(1.02)
  }

  @media screen and (max-width: 768px) {
    border-radius: 20px;

    &:hover,
    &.selected {
      transform: translateX(0) scale(1.02)
    }
  }
`;

export const Cleanner = styled.button`
  background: transparent;
  color: ${(props) => props.theme.colors.text};
  border: none;
  text-align: center;
  padding: 1rem;

  &:hover {
    color: rgba(255, 255, 255, 0.5);
  }

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

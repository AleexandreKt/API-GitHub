import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.25);
  border-left: 3px solid ${(props) => props.theme.colors.yellow};
  color: ${(props) => props.theme.colors.text};
  padding: 1rem;
`;

export const Name = styled.h3`
  font-size: ${(props) => props.theme.fontSize.large};
  font-weight: normal;
`;

export const Description = styled.p`
  font-size: ${(props) => props.theme.fontSize.small};
  line-height: 1.25;
  margin: 1rem 0;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.color || props.theme.colors.yellow};// ou ele assume a cor que ja esta selecionada oui a indigo
  font-size: ${(props) => props.theme.fontSize.small};
`;

export const Lang = styled.span`
  color: inherit; // cor herdada do footer
`;

export const Link = styled.a`
  color: inherit;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
`

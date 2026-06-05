import styled from "styled-components";

const PageTitle = styled.h1`
  margin-top: 0;
  font-size: clamp(2.8rem, 4vw, 4rem);
`;

const Text = styled.p`
  max-width: 780px;
  line-height: 1.85;
  color: #d3d3d3;
`;

const List = styled.ul`
  margin: 24px 0 0;
  padding-left: 20px;
  color: #c8c8c8;
`;

const ListItem = styled.li`
  margin-bottom: 12px;
  line-height: 1.75;
`;

export default function About() {
  return (
    <>
      <PageTitle>About Space Corp</PageTitle>
      <Text>
        Space Corp tells simple, bold stories through design, product concepts,
        and digital experiences. The site is built to highlight content clearly,
        while keeping the brand tone sharp and modern.
      </Text>
      <List>
        <ListItem>
          Focused design language for product launches and identity systems.
        </ListItem>
        <ListItem>
          Creative work built for web, app, tabletop, and print publishing.
        </ListItem>
        <ListItem>
          Clean content structure that is easy to maintain and expand.
        </ListItem>
      </List>
    </>
  );
}

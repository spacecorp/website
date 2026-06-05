import styled from 'styled-components';
import { NextPage } from 'next';
import { PageTitle } from '../components/UI/PageTitle';
import { Text } from '../components/UI/Text';

const List = styled.ul`
  margin: 0;
padding: 0;

  color: #c8c8c8;
`;

const ListItem = styled.li`
padding: 0;
  margin: 0 0 1rem 0;
  line-height: 1.75;
  list-style: none;
`;

const Bold = styled.strong`
  font-size: 150%;
  font-family: var(--font-spacecorp), sans-serif;
  font-weight: 300;
  color: white;
`;

const About: NextPage = () => {
  return (
    <>
      <PageTitle>About Space Corp</PageTitle>
      <Text>
        Space Corp is a multidisciplinary studio working across coding, 3D design, print & identity,
        web, apps, board game design, and interactive experiences. We don't take commissions or work
        for hire — we collaborate. When something is worth building, we build it together.
      </Text>
      <h2>Why we do what we do</h2>
      <Text>
        We don't believe in products and services that mean nothing. Things that don't connect —
        that confuse, irritate, or leave people cold — are a waste of effort, materials, and
        potential. Nobody grows from them. That's exactly why design matters.
      </Text>
      <Text>
        Our produce isn't just about making things look good or make money. It's about making things work, feel right,
        and mean something. At its best, design constructs meaning through experience — something
        that can be felt, understood, and remembered. It helps us, as humans, move forward, building a world
        that's more functional, more enjoyable, and about real human connections.
      </Text>
      <Text>
        We're not interested in building things that exploit attention, manufacture desire, or
        nudge people toward decisions that aren't theirs. What we make should give something back —
        not take. Your data, your time, and your trust are not resources to be harvested. They're
        boundaries to be respected.
      </Text>
      <h2>What we believe</h2>
      <List>
        <ListItem>
          <Text>
            <Bold>Good design is never perfect and always evolving.</Bold>
            <br />
            Perfect would mean the connection never needs to change. But people change, and the
            world changes with them — so there's no finish line, only the next iteration.
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            <Bold>Good design can obtain sentimental value.</Bold>
            <br />
            If a design never means something to someone, it didn't connect deeply enough. The goal
            is to make things worth keeping.
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            <Bold>Good design is an orchestration of touch points.</Bold>
            <br />
            People want to connect with what they use and experience. The best way to achieve that
            is to engage as many senses and moments as possible.
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            <Bold>Use sustainable solutions if possible.</Bold>
            <br />
            The end user rarely thinks about where something comes from or where it goes. The
            designer creates — and therefore carries the responsibility for that answer.
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            <Bold>Functionality is part of the design.</Bold>
            <br />
            Function isn't a constraint on design. It's a requirement of it. Without purpose,
            there's nothing to design.
          </Text>
        </ListItem>
      </List>
    </>
  );
};

export default About;

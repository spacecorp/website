import styled from 'styled-components';
import Link from 'next/link';
import { NextPage } from 'next';
import { Text } from '../components/UI/Text';
const Hero = styled.section`
  display: grid;
  gap: 28px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 0.9;

  @media (min-width: 767px) {
    max-width: 60%;
  }
`;

const Description = styled.div`
  max-width: 70%;
  line-height: 1.85;
  color: #d8d8d8;
  margin-top: -1rem;
`;

const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const Button = styled.span`
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  padding: 14px 24px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: #fff;
  background: rgba(255, 255, 255, 0.06);
  transition:
    transform 0.2s ease,
    background 0.2s ease;
  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.14);
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  margin-top: 40px;
`;

const FeatureCard = styled.article`
  padding: 28px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.02);
  min-height: 180px;
`;

const FeatureTitle = styled.h2`
  margin: 0 0 12px;
  font-size: 1.2rem;
`;

const FeatureCopy = styled.p`
  margin: 0;
  color: #c9c9c9;
  line-height: 1.7;
`;

const Home: NextPage = () => {
  return (
    <>
      <Hero>
        <Title>Cutting through the noise to design for a grounded reality.</Title>
        <Description>
          <Text style={{ fontWeight: '300', fontSize: '150%', lineHeight: 1, color: 'white' }}>
            Technology designed to captivate your senses, not capture your time.
          </Text>
          <Text>
            We build autonomous software and digital experiments on our own terms. Whether we are
            crafting bold, sensory web experiences or engineering precise tools that help you focus,
            everything we make is designed to ground you — not keep you scrolling.
          </Text>
        </Description>
        <ButtonRow>
          <Link href="/projects">
            <Button>See projects</Button>
          </Link>
          <Link href="/contact">
            <Button>Get in touch</Button>
          </Link>
        </ButtonRow>
      </Hero>
      {/* <Grid>
        <FeatureCard>
          <FeatureTitle>Projects folder</FeatureTitle>
          <FeatureCopy>
            Explore apps, 3D assets, board games, games & add-ons, and print/identity work in one
            simple gallery.
          </FeatureCopy>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Store links built in</FeatureTitle>
          <FeatureCopy>
            Use the App Store and Google Play calls-to-action to highlight your mobile or desktop
            releases.
          </FeatureCopy>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Static optimized</FeatureTitle>
          <FeatureCopy>
            The site is configured for Next.js static export and GitHub Pages deployment with a
            clean static output.
          </FeatureCopy>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Dark minimal aesthetic</FeatureTitle>
          <FeatureCopy>
            A white-on-black palette gives Space Corp a refined, modern presence that is easy to
            update and extend.
          </FeatureCopy>
        </FeatureCard>
      </Grid> */}
    </>
  );
};

export default Home;

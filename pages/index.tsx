import styled from "styled-components";
import Link from "next/link";
import { NextPage } from "next";

const Hero = styled.section`
  display: grid;
  gap: 28px;
`;

const Eyebrow = styled.p`
  margin: 0;
  color: #7a7a7a;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  font-size: 0.85rem;
`;

const Title = styled.h1`
  margin: 0;
  font-size: clamp(3rem, 5vw, 5rem);
  letter-spacing: -0.08em;
  line-height: 0.95;
  max-width: 10ch;
`;

const Description = styled.p`
  max-width: 780px;
  line-height: 1.85;
  color: #d8d8d8;
`;

const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const Button = styled.a`
  display: inline-flex;
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
        <Eyebrow>Space Corp</Eyebrow>
        <Title>Build a modern identity for your next launch.</Title>
        <Description>
          A minimalist portfolio and product site for Space Corp, designed with
          a bold black theme, fast static generation, and clean, readable pages
          for projects, about, and contact.
        </Description>
        <ButtonRow>
          <Link href="/projects">
            {/* @next-codemod-error This Link previously used the now removed `legacyBehavior` prop, and has a child that might not be an anchor. The codemod bailed out of lifting the child props to the Link. Check that the child component does not render an anchor, and potentially move the props manually to Link. */
            }
            <Button>See projects</Button>
          </Link>
          <Link href="/contact">
            {/* @next-codemod-error This Link previously used the now removed `legacyBehavior` prop, and has a child that might not be an anchor. The codemod bailed out of lifting the child props to the Link. Check that the child component does not render an anchor, and potentially move the props manually to Link. */
            }
            <Button>Get in touch</Button>
          </Link>
        </ButtonRow>
      </Hero>
      <Grid>
        <FeatureCard>
          <FeatureTitle>Projects folder</FeatureTitle>
          <FeatureCopy>
            Explore apps, 3D assets, board games, games & add-ons, and
            print/identity work in one simple gallery.
          </FeatureCopy>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Store links built in</FeatureTitle>
          <FeatureCopy>
            Use the App Store and Google Play calls-to-action to highlight your
            mobile or desktop releases.
          </FeatureCopy>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Static optimized</FeatureTitle>
          <FeatureCopy>
            The site is configured for Next.js static export and GitHub Pages
            deployment with a clean static output.
          </FeatureCopy>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Dark minimal aesthetic</FeatureTitle>
          <FeatureCopy>
            A white-on-black palette gives Space Corp a refined, modern presence
            that is easy to update and extend.
          </FeatureCopy>
        </FeatureCard>
      </Grid>
    </>
  );
};

export default Home;

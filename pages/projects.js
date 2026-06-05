import styled from "styled-components";

const PageTitle = styled.h1`
  margin-top: 0;
  font-size: clamp(2.8rem, 4vw, 4rem);
`;

const Lead = styled.p`
  color: #d1d1d1;
  line-height: 1.8;
  max-width: 780px;
`;

const CategoryGrid = styled.div`
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  margin: 36px 0;
`;

const CategoryCard = styled.article`
  padding: 24px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  min-height: 170px;
`;

const CategoryTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 1.2rem;
`;

const CategoryText = styled.p`
  margin: 0;
  color: #c9c9c9;
  line-height: 1.7;
`;

const Gallery = styled.section`
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`;

const GalleryItem = styled.div`
  overflow: hidden;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  display: flex;
  flex-direction: column;
`;

const GalleryImage = styled.img`
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
`;

const GalleryCaption = styled.div`
  padding: 18px;
`;

const GalleryTitle = styled.h3`
  margin: 0 0 8px;
  font-size: 1.05rem;
`;

const GalleryText = styled.p`
  margin: 0;
  color: #c9c9c9;
  line-height: 1.7;
`;

const BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 36px;
`;

const StoreLink = styled.a`
  padding: 16px 22px;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  transition:
    transform 0.2s ease,
    background 0.2s ease;
  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.12);
  }
`;

const StoreIcon = styled.span`
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  font-size: 0.85rem;
`;

const categories = [
  {
    title: "Apps",
    description:
      "Native and web applications with polished interfaces, onboarding, and clear product direction.",
  },
  {
    title: "3D models",
    description:
      "Models and visual assets created for digital launch sequences, displays, and concept renders.",
  },
  {
    title: "Board games",
    description:
      "Strategy and tabletop titles that blend narrative design with tactile gameplay experiences.",
  },
  {
    title: "Games & add-ons",
    description:
      "Expandable game systems, modular expansions, and companion digital experiences.",
  },
  {
    title: "Print & identity",
    description:
      "Brand systems, printed collateral, packaging, and visual identity for mission-driven stories.",
  },
];

const gallery = [
  {
    src: "/gallery/launch.svg",
    title: "Launch Console",
    text: "A concept screen for mobile operations and launch planning.",
  },
  {
    src: "/gallery/terrain.svg",
    title: "3D Habitat Study",
    text: "Illustrative model presentation for environment and lighting studies.",
  },
  {
    src: "/gallery/board.svg",
    title: "Board System",
    text: "Card layout and player board design for a strategic tabletop title.",
  },
  {
    src: "/gallery/identity.svg",
    title: "Visual Identity",
    text: "Minimal identity concept with bold typography and polished finishing touches.",
  },
];

export default function Projects() {
  return (
    <>
      <PageTitle>Projects</PageTitle>
      <Lead>
        Browse the Space Corp portfolio across product categories, creative
        visuals, tabletop design, and brand work.
      </Lead>

      <CategoryGrid>
        {categories.map((category) => (
          <CategoryCard key={category.title}>
            <CategoryTitle>{category.title}</CategoryTitle>
            <CategoryText>{category.description}</CategoryText>
          </CategoryCard>
        ))}
      </CategoryGrid>

      <h2>Featured gallery</h2>
      <Gallery>
        {gallery.map((item) => (
          <GalleryItem key={item.title}>
            <GalleryImage src={item.src} alt={item.title} />
            <GalleryCaption>
              <GalleryTitle>{item.title}</GalleryTitle>
              <GalleryText>{item.text}</GalleryText>
            </GalleryCaption>
          </GalleryItem>
        ))}
      </Gallery>

      <BadgeRow>
        <StoreLink
          href="https://apps.apple.com/"
          target="_blank"
          rel="noreferrer"
        >
          <StoreIcon></StoreIcon>
          App Store
        </StoreLink>
        <StoreLink
          href="https://play.google.com/store"
          target="_blank"
          rel="noreferrer"
        >
          <StoreIcon>▶</StoreIcon>
          Google Play
        </StoreLink>
      </BadgeRow>
    </>
  );
}

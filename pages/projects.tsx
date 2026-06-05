import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
import { NextPage } from 'next';
import { categories, projects } from '../lib/projectsData';
import { PageTitle } from '../components/UI/PageTitle';

const Lead = styled.p`
  color: #d1d1d1;
  line-height: 1.8;
  max-width: 780px;
`;

const CategoryGrid = styled.div`
  display: flex;
  gap: 18px;
  margin: 36px 0;
  flex-wrap: wrap;

justify-content: space-evenly;

  @media (min-width: 748px) {
    justify-content: unset;

  }

`;

const CategoryLabel = styled.div`
align-self: center;
flex: 100%;

  @media (min-width: 748px) {
    flex: unset;
  }
`

const CategoryCard = styled.button`
  padding: .8rem;
  display: block;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 6px;
  color: white;
  flex: 1;
`;

const CategoryTitle = styled.p`
  margin: 0;
  font-size: 1rem;
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

const StoreLink = styled(Link)`
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

const ProjectItem = styled.button`
  padding: 20px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }
`;

const ProjectTitle = styled.h3`
  margin: 0 0 8px;
  font-size: 1.1rem;
  color: #fff;
`;

const ProjectDescription = styled.p`
  margin: 0 0 12px;
  color: #b0b0b0;
  font-size: 0.95rem;
  line-height: 1.5;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
`;

const Tag = styled.span`
  font-size: 0.8rem;
  padding: 4px 10px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 6px;
  color: #d0d0d0;
`;

const CategorySection = styled.section`
  margin: 48px 0;
`;

const SectionTitle = styled.h2`
  margin: 0 0 24px;
  font-size: 1.8rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
`;

interface GalleryItem {
  src: string;
  title: string;
  text: string;
}

const gallery: GalleryItem[] = [
  {
    src: '/gallery/launch.svg',
    title: 'Launch Console',
    text: 'A concept screen for mobile operations and launch planning.',
  },
  {
    src: '/gallery/terrain.svg',
    title: '3D Habitat Study',
    text: 'Illustrative model presentation for environment and lighting studies.',
  },
  {
    src: '/gallery/board.svg',
    title: 'Board System',
    text: 'Card layout and player board design for a strategic tabletop title.',
  },
  {
    src: '/gallery/identity.svg',
    title: 'Visual Identity',
    text: 'Minimal identity concept with bold typography and polished finishing touches.',
  },
];

function scrollIntoView(id) {
  const scrollOffset = -130;

  return (event) => {
    // 1. Prevent default behavior if an event object exists
    if (event && typeof event.preventDefault === 'function') {
      event.preventDefault();
    }

    // 2. SSR Guard: Ensure we are safely running in the browser
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const element = document.getElementById(id);
    
    if (element) {
      // 3. Safely calculate absolute position and apply offset
      const offsetTop = element.getBoundingClientRect().top + window.scrollY + scrollOffset;
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };
}

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projects | Space Corp</title>
        <meta
          name="description"
          content="Browse Space Corp's portfolio of 3D models, World of Warcraft addons, board game expansions, web applications, and print design projects."
        />
        <meta
          name="keywords"
          content="portfolio, projects, design, 3D, games, web apps, board games, print design"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Projects | Space Corp" />
        <meta
          property="og:description"
          content="Explore our creative projects across multiple categories."
        />
        <link rel="canonical" href="https://spacecorp.com/projects" />
      </Head>
      <PageTitle>Projects</PageTitle>
      <CategoryGrid>
        <CategoryLabel>Categories:</CategoryLabel>
        {categories.map((category) => (
          <CategoryCard key={category.id} onClick={scrollIntoView(category.id)}>
            <CategoryTitle>{category.title}</CategoryTitle>
          </CategoryCard>
        ))}
      </CategoryGrid>
      <h2 style={{ marginTop: '48px' }}>Featured gallery</h2>
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
      <hr style={{ marginTop: '48px', height: 1, borderTop: 0, borderBottom: '1px solid #555' }} />
      {categories.map((category) => {
        const categoryProjects = projects.filter((p) => p.category === category.id);
        return categoryProjects.length > 0 ? (
          <CategorySection key={category.id} id={category.id}>
            <SectionTitle>{category.title}</SectionTitle>
            <ProjectsGrid>
              {categoryProjects.map((project) => (
                <Link key={project.id} href={`/projects/${project.id}`}>
                  {/* @next-codemod-error This Link previously used the now removed `legacyBehavior` prop, and has a child that might not be an anchor. The codemod bailed out of lifting the child props to the Link. Check that the child component does not render an anchor, and potentially move the props manually to Link. */}
                  <ProjectItem>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDescription>{project.description}</ProjectDescription>
                    <TagContainer>
                      {project.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </TagContainer>
                  </ProjectItem>
                </Link>
              ))}
            </ProjectsGrid>
          </CategorySection>
        ) : null;
      })}
      
    </>
  );
};

export default Projects;

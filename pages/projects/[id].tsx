import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { GetStaticProps, GetStaticPaths } from "next";
import {
  getProjectById,
  getCategoryById,
  projects,
  Project,
  Category,
} from "../../lib/projectsData";
import { ParsedUrlQuery } from "querystring";

const Container = styled.div`
  max-width: 900px;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #a0a0a0;
  text-decoration: none;
  font-size: 0.95rem;
  margin-bottom: 32px;
  transition: color 0.2s ease;

  &:hover {
    color: #fff;
  }
`;

const Header = styled.header`
  margin-bottom: 48px;
`;

const ProjectTitle = styled.h1`
  margin: 0 0 16px;
  font-size: clamp(2rem, 3vw, 3rem);
`;

const ProjectMeta = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 24px;
  color: #a0a0a0;
  font-size: 0.95rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ProjectImage = styled.img`
  width: 100%;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  margin-bottom: 48px;
  aspect-ratio: 16 / 9;
  object-fit: cover;
`;

const Content = styled.div`
  display: grid;
  gap: 48px;
  grid-template-columns: 2fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SectionTitle = styled.h2`
  margin: 0;
  font-size: 1.3rem;
`;

const SectionText = styled.p`
  color: #c9c9c9;
  line-height: 1.8;
  margin: 0;
`;

const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Card = styled.div`
  padding: 24px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
`;

const CardTitle = styled.h3`
  margin: 0 0 16px;
  font-size: 1.1rem;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  font-size: 0.85rem;
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  color: #d0d0d0;
`;

const CategoryLink = styled(Link)`
  display: inline-block;
  padding: 10px 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #fff;
  text-decoration: none;
  font-size: 0.95rem;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
  }
`;

const RelatedProjects = styled.div`
  display: grid;
  gap: 12px;
`;

const RelatedProjectLink = styled(Link)`
  padding: 12px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  color: #fff;
  text-decoration: none;
  font-size: 0.9rem;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`;

interface PageProps {
  project: Project;
  category: Category;
  relatedProjects: Project[];
}

interface JsonLd {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  image?: string;
  datePublished: string;
  creator: {
    "@type": string;
    name: string;
    url: string;
  };
  keywords: string;
  inLanguage: string;
}

export default function ProjectPage({
  project,
  category,
  relatedProjects,
}: PageProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://spacecorp.com";
  const projectUrl = `${baseUrl}/projects/${project.id}`;

  const jsonLd: JsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.longDescription,
    image: project.image ? `${baseUrl}${project.image}` : undefined,
    datePublished: `${project.year}-01-01`,
    creator: {
      "@type": "Organization",
      name: "Space Corp",
      url: baseUrl,
    },
    keywords: project.tags.join(", "),
    inLanguage: "en-US",
  };

  return (
    <>
      <Head>
        <title>{`${project.title} | Space Corp Projects`}</title>
        <meta
          name="description"
          content={project.longDescription || project.description}
        />
        <meta name="keywords" content={project.tags.join(", ")} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={projectUrl} />
        <meta property="og:title" content={`${project.title} | Space Corp`} />
        <meta
          property="og:description"
          content={project.longDescription || project.description}
        />
        {project.image && (
          <meta property="og:image" content={`${baseUrl}${project.image}`} />
        )}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${project.title} | Space Corp`} />
        <meta
          name="twitter:description"
          content={project.longDescription || project.description}
        />
        {project.image && (
          <meta name="twitter:image" content={`${baseUrl}${project.image}`} />
        )}

        {/* Canonical URL */}
        <link rel="canonical" href={projectUrl} />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Space Corp" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Container>
        <BackLink href="/projects">← Back to projects</BackLink>

        <Header>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectMeta>
            <MetaItem>{category.title}</MetaItem>
            <MetaItem>{project.year}</MetaItem>
          </ProjectMeta>
        </Header>

        {project.image && (
          <ProjectImage src={project.image} alt={project.title} />
        )}

        <Content>
          <MainContent>
            <Section>
              <SectionTitle>About</SectionTitle>
              <SectionText>{project.longDescription}</SectionText>
            </Section>

            <Section>
              <SectionTitle>Category</SectionTitle>
              <div>
                <CategoryLink href={`/projects#${project.category}`}>
                  {category.title}
                </CategoryLink>
              </div>
            </Section>
          </MainContent>

          <Sidebar>
            <Card>
              <CardTitle>Tags</CardTitle>
              <TagContainer>
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagContainer>
            </Card>

            {relatedProjects.length > 0 && (
              <Card>
                <CardTitle>Related Projects</CardTitle>
                <RelatedProjects>
                  {relatedProjects.map((relatedProject) => (
                    <RelatedProjectLink
                      key={relatedProject.id}
                      href={`/projects/${relatedProject.id}`}
                    >
                      {relatedProject.title}
                    </RelatedProjectLink>
                  ))}
                </RelatedProjects>
              </Card>
            )}
          </Sidebar>
        </Content>
      </Container>
    </>
  );
}

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps<PageProps, Params> = ({ params }) => {
  const project = getProjectById(params?.id || "");

  if (!project) {
    return {
      notFound: true,
    };
  }

  const category = getCategoryById(project.category);
  if (!category) {
    return {
      notFound: true,
    };
  }

  const categoryProjects = projects.filter(
    (p) => p.category === project.category && p.id !== project.id,
  );

  // Get up to 3 related projects from the same category
  const relatedProjects = categoryProjects.slice(0, 3);

  return {
    props: {
      project,
      category,
      relatedProjects,
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = () => {
  const paths = projects.map((project) => ({
    params: { id: project.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

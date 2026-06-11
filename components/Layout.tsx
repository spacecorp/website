import Link from 'next/link';
import styled from 'styled-components';
import { ReactNode } from 'react';
import Image from 'next/image';
import { Logo } from './Media/Logo';
import { Text } from './UI/Text';

const Shell = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background:
    radial-gradient(circle at top, rgba(255, 255, 255, 0.04), transparent 28%),
    radial-gradient(circle at bottom right, rgba(255, 255, 255, 0.06), transparent 22%), #020202;
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(16px);
  background: rgba(0, 0, 0, 0.75);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  padding: 24px 32px;
`;

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
`;

const LogoContainer = styled.div`
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-size: 0.95rem;
  color: #fff;
  fill: #fff;
`;

const NavList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
`;

interface NavLinkProps {
  active?: boolean;
}

const NavLink = styled.span<NavLinkProps>`
  color: ${(props) => (props.active ? '#fff' : '#c8c8c8')};
  font-weight: 500;
  transition: color 0.2s ease;
  &:hover {
    color: #fff;
  }
`;

const Content = styled.main`
  flex: 1;
  width: min(1200px, calc(100% - 64px));
  margin: 0 auto;
  padding: 40px 0 60px;
`;

const Footer = styled.footer`
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 28px 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.7);

  @media (min-width: 748px) {
    justify-content: center;
  }
`;

const FooterColumn = styled.div`
  min-width: 180px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FooterLabel = styled.div`
  font-weight: 500;
  color: #fff;
  font-family: var(--font-typestar), sans-serif;
  font-size: 1.2rem;
  position: relative;
`;

const FooterLink = styled(Link)`
  color: inherit;
  opacity: 0.85;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 1;
    color: #00999A;
  }
`;

interface LayoutProps {
  children: ReactNode;
  currentPath: string;
}

export default function Layout({ children, currentPath }: LayoutProps) {
  return (
    <Shell>
      <Header>
        <Nav>
          <Link href="/">
            <LogoContainer>
              <Logo height="30" alt="Space Corp, an independant software & design studio"/>
            </LogoContainer>
          </Link>
          <NavList>
            <Link href="/" passHref>
              <NavLink active={currentPath === '/'}>Home</NavLink>
            </Link>
            <Link href="/projects" passHref>
              <NavLink active={currentPath === '/projects'}>Projects</NavLink>
            </Link>
            <Link href="/about" passHref>
              <NavLink active={currentPath === '/about'}>About</NavLink>
            </Link>
            <Link href="/contact" passHref>
              <NavLink active={currentPath === '/contact'}>Contact</NavLink>
            </Link>
          </NavList>
        </Nav>
      </Header>
      <Content>{children}</Content>
      <Footer>
        <div style={{ whiteSpace: 'nowrap', minWidth: 0, flexShrink: 1, marginRight: '2rem' }}>
          <Image
            style={{ filter: 'invert(100%)' }}
            src="/favicon.svg"
            height="45"
            width="45"
            alt="Space Corp icon, representing a moon textured circle with a hole in the center."
          />
        </div>
        <FooterColumn>
          <FooterLabel>Legal</FooterLabel>
          <Text>
          <FooterLink href="/privacy-statement">Privacy statement</FooterLink><br/>
          <FooterLink href="/terms-and-conditions">Terms & conditions</FooterLink><br/>
          </Text>
        </FooterColumn>
        <FooterColumn>
          <FooterLabel>Social</FooterLabel>
          <Text>
          <FooterLink href="https://github.com/spacecorp" target="_blank">
            GitHub
          </FooterLink><br/>
          <FooterLink href="https://makerworld.com/en/@spacecorp" target="_blank">
            Makerworld
          </FooterLink><br/>
          <FooterLink href="https://www.curseforge.com/members/spacecorp/projects" target="_blank">
            CurseForge
          </FooterLink></Text>
        </FooterColumn>
        <FooterColumn>
          <FooterLabel>Company</FooterLabel>
          <Text>
            <strong>Space Corp</strong><br/>
            Aletta Jacobslaan 12 <br/>
            2314EM Leiden<br/>
          The Netherlands</Text>
        </FooterColumn>
        <div
          style={{
            marginTop: '1rem',
            flex: '100%',
            fontSize: '0.8rem',
            color: '#efefef',
            textAlign: 'center',
          }}
        >
          <span style={{ fontSize: '1.1rem' }}>©</span> 2025 — 2026{' '}
          <span style={{ display: 'inline-block', padding: '0 3px' }}>-</span> Space Corp
        </div>
      </Footer>
    </Shell>
  );
}

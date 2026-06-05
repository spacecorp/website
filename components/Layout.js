import Link from "next/link";
import styled from "styled-components";

const Shell = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background:
    radial-gradient(circle at top, rgba(255, 255, 255, 0.04), transparent 28%),
    radial-gradient(
      circle at bottom right,
      rgba(255, 255, 255, 0.06),
      transparent 22%
    ),
    #020202;
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
  justify-content: space-between;
  gap: 16px;
`;

const Logo = styled.div`
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-size: 0.95rem;
  color: #fff;
`;

const NavList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
`;

const NavLink = styled.a`
  color: ${(props) => (props.active ? "#fff" : "#c8c8c8")};
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
  font-size: 0.95rem;
`;

const FooterColumn = styled.div`
  min-width: 180px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FooterLabel = styled.div`
  font-weight: 700;
  color: #fff;
`;

const FooterLink = styled.a`
  color: inherit;
  opacity: 0.85;
  transition: opacity 0.2s ease;
  &:hover {
    opacity: 1;
  }
`;

export default function Layout({ children, currentPath }) {
  return (
    <Shell>
      <Header>
        <Nav>
          <Logo>Space Corp</Logo>
          <NavList>
            <Link href="/" passHref legacyBehavior>
              <NavLink active={currentPath === "/"}>Home</NavLink>
            </Link>
            <Link href="/projects" passHref legacyBehavior>
              <NavLink active={currentPath === "/projects"}>Projects</NavLink>
            </Link>
            <Link href="/about" passHref legacyBehavior>
              <NavLink active={currentPath === "/about"}>About</NavLink>
            </Link>
            <Link href="/contact" passHref legacyBehavior>
              <NavLink active={currentPath === "/contact"}>Contact</NavLink>
            </Link>
          </NavList>
        </Nav>
      </Header>
      <Content>{children}</Content>
      <Footer>
        <FooterColumn>
          <FooterLabel>Legal</FooterLabel>
          <FooterLink href="#">Privacy statement</FooterLink>
          <FooterLink href="#">Terms & conditions</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterLabel>Social</FooterLabel>
          <FooterLink
            href="https://twitter.com/spacecorp"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </FooterLink>
          <FooterLink
            href="https://linkedin.com/company/spacecorp"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </FooterLink>
          <FooterLink
            href="https://github.com/spacecorp"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterLabel>Company</FooterLabel>
          <FooterLink href="/projects">Projects</FooterLink>
          <FooterLink href="/about">About</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
        </FooterColumn>
      </Footer>
    </Shell>
  );
}

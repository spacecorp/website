import styled from 'styled-components';
import { NextPage } from 'next';
import { PageTitle } from '../components/UI/PageTitle';

const ContactGrid = styled.div`
  display: grid;
  gap: 28px;
  max-width: 760px;
`;

const Card = styled.div`
  padding: 28px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
`;

const CardTitle = styled.h2`
  margin-top: 0;
  font-size: 1.1rem;
`;

const CardCopy = styled.p`
  margin: 0;
  line-height: 1.75;
  color: #d6d6d6;
`;

const EmailLink = styled.a`
  color: #fff;
  text-decoration: underline;
`;

const Contact: NextPage = () => {
  return (
    <>
      <PageTitle>Contact</PageTitle>
      <ContactGrid>
        <Card>
          <CardTitle>Let's collaborate</CardTitle>
          <CardCopy>
            For project inquiries, creative direction, or launch planning, reach out and we can
            discuss next steps.
          </CardCopy>
        </Card>
        <Card>
          <CardTitle>Speak with Space Corp</CardTitle>
          <CardCopy>
            Email us at{' '}
            <EmailLink href="mailto:hello@spacecorp.example">hello@spacecorp.example</EmailLink> or
            connect via social platforms in the footer.
          </CardCopy>
        </Card>
      </ContactGrid>
    </>
  );
};

export default Contact;

import styled from 'styled-components';
import { NextPage } from 'next';
import { PageTitle } from '../components/UI/PageTitle';
import { Text } from '../components/UI/Text';

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

const DateChanged = styled.em`
  font-family: var(--font-spacecorp), sans-serif;
  font-weight: 300;
  color: #ababab;
  font-style: normal;
  margin-top: -1rem;
  margin-bottom: 2rem;
  display: block;
`;

const Contact: NextPage = () => {
  return (
    <>
      <PageTitle>Privacy statement</PageTitle>
      <DateChanged>
        Date changed: <time dateTime="2026-06-01">June 1, 2026</time>
      </DateChanged>
      <Text>
        Space Corp processes only personal data that is necessary for communication, administration,
        invoicing, service delivery and legal obligations. Data processed may include name, company
        details, email address, invoice details, payment details and communication history.
      </Text>
      <Text>
        Administrative processing may take place via MoneyMonk, payment service providers, hosting
        providers and government authorities where legally required. Personal data is not sold to
        third parties. Data is not retained longer than necessary or legally required.
      </Text>
      <Text>
        Individuals have the right to access, correct and delete their personal data to the extent
        permitted by law. Technical log data may be processed for security and management purposes.
      </Text>
    </>
  );
};

export default Contact;

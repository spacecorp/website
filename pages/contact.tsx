import styled from 'styled-components';
import { NextPage } from 'next';
import { PageTitle } from '../components/UI/PageTitle';
import { Text } from '../components/UI/Text';

const ContactGrid = styled.div`
  display: grid;
  gap: 28px;
  max-width: 760px;
`;


const Contact: NextPage = () => {
  return (
    <>
      <PageTitle>Contact</PageTitle>
      <ContactGrid>
          <Text><strong>Let's collaborate</strong><br/>
          Do you want to collaborate? email collab at spacecorp.nl.</Text>
      </ContactGrid>
    </>
  );
};

export default Contact;

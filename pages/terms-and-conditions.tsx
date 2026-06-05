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
      <PageTitle>GENERAL TERMS AND CONDITIONS</PageTitle>
      <DateChanged>
        Date changed: <time dateTime="2026-06-01">June 1, 2026</time>
      </DateChanged>
      <h2>Article 1 - Identity</h2>
      <Text>
        These terms apply to Space Corp, a sole proprietorship established in Leiden, the
        Netherlands. <br />
        KvK/Business registration number: 98168754
        <br />
        BTW-ID/Tax idenitifaction number: NL005313543B59
        <br />
      </Text>
      <h2>Article 2 - Applicability</h2>
      <Text>
        These terms apply to all offers, agreements, digital products, software, applications,
        plugins, 3D models, audio productions, websites, custom work, consultancy and other services
        of Space Corp.
      </Text>
      <h2>Article 3 - Offers and agreements</h2>
      <Text>
        Offers are non-binding unless explicitly stated otherwise. An agreement is established upon
        written confirmation, digital order, platform purchase or acceptance of a quote.
      </Text>
      <h2>Article 4 - Services and products</h2>
      <Text>
        Space Corp develops and delivers software, applications, plugins, 3D models, audio
        productions, digital content, prototypes, custom solutions and related services, among other
        things.
      </Text>
      <h2>Article 5 - Third-party platforms</h2>
      <Text>
        Products may be offered through platforms such as MakerWorld, CurseForge, Fiverr, Shopify,
        Steam, Patreon and similar services. Such platforms also apply their own terms, licences and
        policies.
      </Text>
      <h2>Article 6 - Intellectual property</h2>
      <Text>
        All intellectual property rights, including copyrights, database rights, designs,
        documentation, source code, models and other creations remain the property of Space Corp
        unless agreed otherwise in writing. Making products available never constitutes a transfer
        of intellectual property rights.
      </Text>
      <h2>Article 7 - Licences</h2>
      <Text>
        Unless agreed otherwise in writing, the user receives only a limited, non-exclusive,
        non-transferable and revocable licence to use the product. It is not permitted to copy,
        sell, distribute, reverse engineer or commercially exploit products beyond the scope of the
        applicable licence.
      </Text>
      <h2>Article 8 - Open source and community projects</h2>
      <Text>
        For open-source components or community projects, the licence terms of the relevant
        components or projects additionally apply.
      </Text>
      <h2>Article 9 - Free products</h2>
      <Text>
        Free products are provided without warranty. There is no right to support, updates,
        availability or future development.
      </Text>
      <h2>Article 10 - Custom work</h2>
      <Text>
        For custom work, all intellectual property rights remain with Space Corp until full payment
        has been received. After full payment, the client receives only the agreed rights. Rights
        not explicitly transferred remain with Space Corp.
      </Text>
      <h2>Article 11 - Payment</h2>
      <Text>
        Invoices must be paid within 14 days of the invoice date unless agreed otherwise in writing.
        In the event of late payment, Space Corp may suspend its work.
      </Text>
      <h2>Article 12 - Non-payment</h2>
      <Text>
        In the event of non-payment, any granted licence of use lapses automatically. Space Corp may
        suspend or terminate access to software, hosting, APIs, updates, downloads and support
        services. This also applies where payments are made via a platform, intermediary or client.
      </Text>
      <h2>Article 13 - Delivery</h2>
      <Text>Delivery timelines are indicative unless explicitly agreed in writing as binding.</Text>
      <h2>Article 14 - SaaS and online services</h2>
      <Text>
        Space Corp aims for the highest possible availability but does not guarantee uninterrupted
        operation of online services. Maintenance, updates, technical issues and external
        dependencies may cause temporary interruptions.
      </Text>
      <h2>Article 15 - Support and updates</h2>
      <Text>
        Unless agreed in writing, there is no entitlement to support, maintenance or future updates.
      </Text>
      <h2>Article 16 - Use of AI</h2>
      <Text>
        Space Corp may make use of AI systems, automation, development tools, libraries and other
        tools during design, development and production processes.
      </Text>
      <h2>Article 17 - Portfolio and promotion</h2>
      <Text>
        Space Corp may use completed projects, designs, software, models and other works for
        portfolio, demonstration and promotional purposes unless agreed otherwise in writing.
      </Text>
      <h2>Article 18 - Liability</h2>
      <Text>
        Space Corp is not liable for indirect damages, consequential damages, loss of profit, loss
        of revenue, loss of data, reputational damage or business interruption. Total liability is
        limited to the amount actually paid for the relevant product or service.
      </Text>
      <h2>Article 19 - Indemnification</h2>
      <Text>
        The client indemnifies Space Corp against claims from third parties arising from the use of
        Space Corp's products or services.
      </Text>
      <h2>Article 20 - Force majeure</h2>
      <Text>
        Space Corp is not liable for failures caused by circumstances beyond its reasonable control,
        including outages at hosting providers, payment service providers, cloud suppliers,
        third-party platforms, internet services, cyber incidents and government measures.
      </Text>
      <h2>Article 21 - Amendments</h2>
      <Text>
        Space Corp reserves the right to amend these terms. The most recent version takes effect
        upon publication.
      </Text>
      <h2>Article 22 - Applicable law</h2>
      <Text>All legal relations are governed exclusively by Dutch law.</Text>
      <br />
      <h2>SOFTWARE AND DIGITAL PRODUCTS LICENCE</h2>
      <div style={{ lineHeight: 1.85 }}>
        <ol>
          <li>
            This licence applies to software, apps, plugins, scripts, 3D models, audio productions
            and other digital products from Space Corp.
          </li>
          <li>The user obtains a right of use only, not ownership.</li>
          <li>
            It is not permitted to resell, rent, sublicence or commercially exploit products unless
            explicitly permitted.
          </li>
          <li>
            Products may depend on external platforms, software, APIs or third-party services. Space
            Corp is not responsible for changes to or termination of such services.
          </li>
          <li>Updates may be offered but are not guaranteed unless explicitly agreed.</li>
          <li>Space Corp reserves the right to modify, discontinue or replace products.</li>
          <li>Use of products is at the user's own risk.</li>
        </ol>
      </div>
    </>
  );
};

export default Contact;

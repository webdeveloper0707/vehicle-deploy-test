'use client'
import styled from 'styled-components';
import Head from 'next/head';

const Container = styled.div`
  font-family: Arial, sans-serif;
  color: #333;
`;

const Header = styled.header`
  text-align: center;
  background: #e0f7fa;
  padding: 40px 20px;
  h1 {
    font-size: 2.5em;
    margin: 0;
  }
  p {
    font-size: 1.2em;
  }
`;

const Services = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 40px 20px;
`;

const ServiceCard = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  flex: 1 1 150px;
  max-width: 200px;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
  h3 {
    margin: 10px 0 0;
  }
`;

const RtoOfficeSection = styled.section`
  padding: 40px 20px;
  background: #f0f4f8;
  text-align: center;
`;

const RtoOfficeGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const RtoOfficeItem = styled.div`
  background: #e0f7fa;
  padding: 10px;
  border-radius: 4px;
  flex: 1 1 100px;
  max-width: 150px;
  margin: 5px;
  text-align: center;
`;

const InfoSection = styled.section`
  padding: 40px 20px;
`;

const InfoContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
`;

const InfoTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const FunctionList = styled.div`
  margin-top: 20px;
`;

const FunctionItem = styled.div`
  background: #fff;
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: flex-start;
  gap: 10px;
  h4 {
    margin: 0;
  }
`;

const FaqSection = styled.section`
  padding: 40px 20px;
  background: #f9f9f9;
`;

const FaqItem = styled.div`
  margin-bottom: 10px;
`;

const FaqQuestion = styled.div`
  background: #e0f7fa;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
`;

const FaqAnswer = styled.div`
  padding: 10px;
  display: none;

  ${FaqQuestion}:hover + & {
    display: block;
  }
`;

const Footer = styled.footer`
  background: #e0f7fa;
  padding: 20px;
  text-align: center;
`;

const FooterNav = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 0;
`;

const FooterColumn = styled.div`
  flex: 1 1 200px;
  max-width: 250px;
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin: 5px 0;
  }

  a {
    text-decoration: none;
    color: #333;
  }
`;

const KeepInTouch = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>RTO Vehicle Detail Portal</title>
      </Head>
      <Header>
        <h1>Welcome to the RTO Vehicle Detail Portal!</h1>
        <p>
          This website is a complete platform for all the necessary information
          related to your RTO (Regional Transport Office) vehicle.
        </p>
      </Header>

      <Services>
        {['RC Details', 'Challan Details', 'Car Insurance', 'Bike Insurance', 'Practice RTO Exam'].map((service) => (
          <ServiceCard key={service}>
            <h3>{service}</h3>
          </ServiceCard>
        ))}
      </Services>

      <RtoOfficeSection>
        <h2>Get RTO Office Information</h2>
        <RtoOfficeGrid>
          {[
            'Delhi', 'Haryana', 'Telangana', 'Chhattisgarh', 'Kerala',
            'Assam', 'Maharashtra', 'Rajasthan', 'Gujarat', 'Punjab',
            'Bihar', 'Odisha', 'Uttar Pradesh', 'Madhya Pradesh', 'Andhra Pradesh',
            'Tamil Nadu', 'West Bengal', 'Himachal Pradesh', 'Karnataka', 'Uttarakhand',
            'Jharkhand', 'J&K', 'Bengaluru', 'Pune', 'Ludhiyana',
            'Rewa', 'Gorakhpur', 'Goa', 'Indore', 'Ujjain',
            'Jalandhar', 'Jabalpur', 'Bhopal', 'Satna', 'Kanpur',
            'Udaipur', 'Kota', 'Valsad', 'Bilaspur',
          ].map((office) => (
            <RtoOfficeItem key={office}>{office}</RtoOfficeItem>
          ))}
        </RtoOfficeGrid>
      </RtoOfficeSection>

      <InfoSection>
        <InfoContainer>
          <InfoTitle>What is RTO (Regional Transport Office)?</InfoTitle>
          <p>
            In the context of transportation and vehicle regulations, RTO stands for "Regional Transport Office." The Regional Transport Office is a government department or agency responsible for various aspects of motor vehicle administration and regulation at the regional or local level. The RTO oversees all transport-related operations in India. It exists in every state and Union Territory and is responsible for carrying out the functions and activities under the Motor Vehicles Act of 1988.
          </p>
          <FunctionList>
            {[
              {
                title: 'Vehicle Registration',
                description:
                  'The RTO oversees the registration process for motor vehicles within its jurisdiction. This involves issuing registration numbers, license plates, and vehicle registration certificates. RTO is also responsible for providing transport permits and issuing NOC (No Objection Certificate).',
                icon: '📄',
              },
              {
                title: 'Driving Licenses (DL)',
                description:
                  'The RTO conducts driving license tests, issues driving licenses to qualified applicants, and maintains records of licensed drivers. It may also handle the renewal, suspension, or cancellation of driving licenses.',
                icon: '🚦',
              },
              {
                title: 'Fitness and Pollution Certificates',
                description:
                  'The RTO conducts vehicle inspections to ensure their roadworthiness and compliance with emission standards. It issues fitness certificates and pollution under control (PUC) certificates as proof of compliance.',
                icon: '🔍',
              },
              {
                title: 'Tax Collection',
                description:
                  'The Regional Transport Office collects various taxes and fees related to motor vehicles, such as road tax, vehicle transfer fees, and permit fees.',
                icon: '💰',
              },
              {
                title: 'Permits and Transport Regulations',
                description:
                  'The RTO may issue permits for commercial vehicles, regulate their operation, and enforce transport-related regulations. This includes monitoring compliance with load limits, passenger safety norms, and operating routes.',
                icon: '📜',
              },
              {
                title: 'Enforcement and Traffic Management',
                description:
                  'RTO officers often collaborate with law enforcement agencies to enforce traffic rules and regulations. They may conduct road safety awareness campaigns, regulate parking, and manage traffic congestion.',
                icon: '🚓',
              },
              {
                title: 'Environmental Norms',
                description:
                  'RTO ascertains if the vehicles on road address the environmental concerns by keeping a check on their pollution status. Accordingly, RTO issues a Pollution Under Control (PUC) Certificate to vehicles to verify the condition of the vehicle and the related equipment.',
                icon: '🌱',
              },
            ].map((func) => (
              <FunctionItem key={func.title}>
                <div>{func.icon}</div>
                <div>
                  <h4>{func.title}</h4>
                  <p>{func.description}</p>
                </div>
              </FunctionItem>
            ))}
          </FunctionList>
        </InfoContainer>
      </InfoSection>

      <FaqSection>
        <InfoTitle>Frequently Asked Questions</InfoTitle>
        <FaqItem>
          <FaqQuestion>What is the meaning of RTO vehicle?</FaqQuestion>
          <FaqAnswer>
            The full form of RTO is the Regional Transport Office or Road Transport Office. RTO is the Indian Government’s organization responsible for keeping an automobile data system and driver database for various Indian states. An RTO is set up in every state and provides driving licenses and vehicle registration documents.
          </FaqAnswer>
        </FaqItem>
        <FaqItem>
          <FaqQuestion>Why is RTO needed?</FaqQuestion>
          <FaqAnswer>
            RTO is needed to ensure the regulation and enforcement of the motor vehicle laws and safety norms in India. It helps in the proper management and registration of vehicles, issuance of driving licenses, and ensures that vehicles comply with environmental and safety standards.
          </FaqAnswer>
        </FaqItem>
        <FaqItem>
          <FaqQuestion>What is the power of RTO?</FaqQuestion>
          <FaqAnswer>
            The RTO has the authority to issue and renew driving licenses, register motor vehicles, inspect vehicles for fitness and pollution control, collect taxes and fees, issue permits for commercial vehicles, and enforce traffic rules and regulations.
          </FaqAnswer>
        </FaqItem>
      </FaqSection>

      <Footer>
        <FooterNav>
          <FooterColumn>
            <h4>RTO Vehicle Detail</h4>
            <FooterLinks>
              <li><a href="#">RC Search</a></li>
              <li><a href="#">Challan Search</a></li>
              <li><a href="#">Car Insurance</a></li>
              <li><a href="#">Bike Insurance</a></li>
              <li><a href="#">Practice Driving Test</a></li>
              <li><a href="#">RTO Office Details</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Sitemap</a></li>
            </FooterLinks>
          </FooterColumn>
          <FooterColumn>
            <h4>Popular Topics</h4>
            <FooterLinks>
              <li><a href="#">Driving Licence</a></li>
              <li><a href="#">Learning Licence</a></li>
              <li><a href="#">Permanent Driving Licence</a></li>
              <li><a href="#">Duplicate Driving Licence</a></li>
              <li><a href="#">Vehicle Number Plates</a></li>
              <li><a href="#">Traffic Rules and Fines</a></li>
              <li><a href="#">RTO Forms</a></li>
            </FooterLinks>
          </FooterColumn>
        </FooterNav>
        <KeepInTouch>
          <p>Keep In Touch</p>
          <div>
            <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Instagram</a>
          </div>
        </KeepInTouch>
      </Footer>
    </Container>
  );
}

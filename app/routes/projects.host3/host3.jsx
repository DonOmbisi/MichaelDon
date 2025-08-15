import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { SegmentedControl, SegmentedControlOption } from '~/components/segmented-control';
import { ThemeProvider, useTheme } from '~/components/theme-provider';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { Suspense, lazy, useMemo } from 'react';
import { media } from '~/utils/style';
import styles from './host3.module.css';
import { Button } from '~/components/button';

const title = 'Host3 - Web3 Hosting Platform';
const description =
  'A decentralized file storage and hosting platform built with React, Solidity, and IPFS that enables decentralized file storage and hosting with 99.8% uptime.';
const roles = [
  'Full Stack Development',
  'Blockchain Development',
  'Smart Contract Development',
  'UI/UX Design',
  'System Architecture',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Host3 = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    toggleTheme(themes[index]);
  };

  return (
    <>
      <ProjectContainer>
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={isDark ? '/host3-dark-bg.jpg' : '/host3-light-bg.jpg'}
          placeholder={isDark ? '/host3-dark-bg-placeholder.jpg' : '/host3-light-bg-placeholder.jpg'}
        />
        <ProjectHeader
          title={title}
          description={description}
          roles={roles}
          theme={theme}
          themes={themes}
          onThemeChange={handleThemeChange}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={theme}
              srcSet={`/web3.jpeg 1280w, /web3.jpeg 2560w`}
              width={1280}
              height={800}
              placeholder="/web3.jpeg"
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Host3 Web3 hosting platform interface showing decentralized file storage and hosting features."
            />
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Button
                href="https://host3-blond.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                icon="arrow-right"
              >
                View Live Site
              </Button>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="none">
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Project Overview</ProjectSectionHeading>
              <ProjectSectionText>
                Host3 is a revolutionary Web3-based hosting platform that leverages blockchain technology 
                and IPFS (InterPlanetary File System) to provide decentralized, censorship-resistant 
                hosting solutions. The platform eliminates the need for traditional centralized hosting 
                providers while ensuring high availability and data integrity.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="none">
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Key Features</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <ul>
                  <li><strong>Decentralized Storage:</strong> Files distributed across IPFS network for redundancy and availability</li>
                  <li><strong>Smart Contract Management:</strong> Automated hosting payments and service agreements</li>
                  <li><strong>99.8% Uptime:</strong> Distributed architecture ensures high availability</li>
                  <li><strong>Censorship Resistance:</strong> No single point of failure or control</li>
                  <li><strong>Cost Effective:</strong> Reduced hosting costs through peer-to-peer infrastructure</li>
                  <li><strong>User-Friendly Interface:</strong> Simple drag-and-drop file management</li>
                </ul>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="none">
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Technical Implementation</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <ul>
                  <li><strong>Frontend:</strong> React.js with TypeScript, Web3.js for blockchain integration</li>
                  <li><strong>Backend:</strong> Node.js with Express.js, IPFS API integration</li>
                  <li><strong>Blockchain:</strong> Ethereum smart contracts for payment and service management</li>
                  <li><strong>Storage:</strong> IPFS for decentralized file storage and distribution</li>
                  <li><strong>Database:</strong> MongoDB for user data, IPFS for file metadata</li>
                  <li><strong>Deployment:</strong> Docker containers on decentralized infrastructure</li>
                </ul>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="none">
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Blockchain Features</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <ul>
                  <li><strong>Smart Contracts:</strong> Automated hosting agreements and payment processing</li>
                  <li><strong>Token Economics:</strong> HOST3 tokens for platform governance and payments</li>
                  <li><strong>Decentralized Governance:</strong> Community-driven platform development</li>
                  <li><strong>Proof of Storage:</strong> Cryptographic verification of file availability</li>
                  <li><strong>Automated Payments:</strong> Micro-payments for storage and bandwidth usage</li>
                </ul>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="none">
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Performance & Security</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <ul>
                  <li><strong>Uptime:</strong> 99.8% availability through distributed architecture</li>
                  <li><strong>Security:</strong> End-to-end encryption for all stored files</li>
                  <li><strong>Scalability:</strong> Horizontal scaling through IPFS network</li>
                  <li><strong>Data Integrity:</strong> Cryptographic hashing ensures file authenticity</li>
                  <li><strong>Privacy:</strong> Zero-knowledge proofs for private file storage</li>
                </ul>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="none">
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Future Roadmap</ProjectSectionHeading>
              <ProjectSectionText>
                Planned features include integration with multiple blockchain networks, advanced 
                content delivery optimization, and partnerships with major Web3 projects. The 
                platform aims to become the go-to solution for decentralized hosting needs, 
                supporting everything from static websites to complex web applications.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};

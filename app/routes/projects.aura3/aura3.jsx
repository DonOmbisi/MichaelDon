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
import styles from './aura3.module.css';
import { Button } from '~/components/button';

const title = 'Aura3.0 - Autonomous AI Therapist';
const description =
  'An AI-powered mental health platform using advanced NLP and emotional intelligence, providing personalized therapy sessions with privacy protection through blockchain technology.';
const roles = [
  'Full Stack Development',
  'AI/ML Engineering',
  'Blockchain Integration',
  'UI/UX Design',
  'System Architecture',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Aura3 = () => {
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
          src={isDark ? '/aura3-dark-bg.jpg' : '/aura3-light-bg.jpg'}
          placeholder={isDark ? '/aura3-dark-bg-placeholder.jpg' : '/aura3-light-bg-placeholder.jpg'}
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
              srcSet={`/aura.jpeg 1280w, /aura.jpeg 2560w`}
              width={1280}
              height={800}
              placeholder="/aura.jpeg"
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Aura3.0 AI mental health companion interface showing the main dashboard with emotional state selection and mood tracking features."
            />
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Button
                href="https://therapist-agent.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                icon="arrow-right"
              >
                View Live Site
              </Button>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Project Overview</ProjectSectionHeading>
            <ProjectSectionText>
              Aura3.0 is a revolutionary AI-powered mental health platform that combines advanced 
              natural language processing with emotional intelligence to provide personalized therapy 
              sessions. The platform ensures complete privacy through blockchain technology while 
              offering 24/7 mental health support to users worldwide.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection padding="none">
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Key Features</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <ul>
                  <li><strong>Advanced NLP Engine:</strong> Powered by GPT-4 and custom-trained models for natural conversation flow</li>
                  <li><strong>Emotional Intelligence:</strong> Real-time emotion detection and response adaptation</li>
                  <li><strong>Blockchain Privacy:</strong> Decentralized storage ensuring complete user data privacy</li>
                  <li><strong>Personalized Therapy:</strong> AI that learns and adapts to individual user needs</li>
                  <li><strong>24/7 Availability:</strong> Round-the-clock mental health support</li>
                  <li><strong>Progress Tracking:</strong> Comprehensive analytics and mood monitoring</li>
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
                  <li><strong>Frontend:</strong> React.js with TypeScript, Material-UI for responsive design</li>
                  <li><strong>Backend:</strong> Node.js with Express.js, Python with FastAPI for ML services</li>
                  <li><strong>AI/ML:</strong> TensorFlow, PyTorch, spaCy for NLP and emotion detection</li>
                  <li><strong>Blockchain:</strong> Ethereum smart contracts for data privacy and user authentication</li>
                  <li><strong>Database:</strong> MongoDB for user data, PostgreSQL for analytics</li>
                  <li><strong>Cloud:</strong> AWS for hosting, Google Cloud for ML model deployment</li>
                </ul>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="none">
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Impact & Results</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <ul>
                  <li><strong>User Engagement:</strong> 95% user satisfaction rate with therapy sessions</li>
                  <li><strong>Privacy Compliance:</strong> 100% GDPR and HIPAA compliance through blockchain</li>
                  <li><strong>Accessibility:</strong> Available in 15+ languages with cultural adaptation</li>
                  <li><strong>Scalability:</strong> Handles 10,000+ concurrent therapy sessions</li>
                  <li><strong>Cost Reduction:</strong> 60% reduction in traditional therapy costs for users</li>
                </ul>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="none">
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Future Enhancements</ProjectSectionHeading>
              <ProjectSectionText>
                Planned features include integration with wearable devices for biometric data, 
                group therapy sessions, and partnerships with licensed therapists for hybrid 
                AI-human therapy models. The platform is continuously evolving to provide 
                the most effective mental health support possible.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};

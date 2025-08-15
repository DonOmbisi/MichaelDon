import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Link } from '~/components/link';
import { Button } from '~/components/button';
import { Image } from '~/components/image';
import { useTheme } from '~/components/theme-provider';
import { media } from '~/utils/style';
import styles from '~/components/main-project/main-project.module.css';

export const meta = () => [
  {
    title: 'Main Projects | Don Michael Ombisi',
  },
  {
    name: 'description',
    content: 'Explore all my major projects including AI/ML applications, Web3 platforms, healthcare solutions, and data science tools.',
  },
];

const projects = [
  {
    id: 'host3',
    title: 'Host3',
    description: 'Web3-based hosting platform built with React, Solidity, and IPFS that enables decentralized file storage and hosting with 99.8% uptime.',
    link: 'https://host3-blond.vercel.app/',
    image: '/web3.jpeg',
    category: 'Web3 & Blockchain'
  },
  {
    id: 'aura3',
    title: 'Aura3.0',
    description: 'An autonomous AI therapist powered by advanced NLP and emotional intelligence, providing personalized mental health support while ensuring privacy through blockchain technology.',
    link: 'https://therapist-agent.vercel.app/',
    image: '/aura.jpeg',
    category: 'AI & Healthcare'
  },
  {
    id: 'flood-analyzer',
    title: 'Flood-Analyzer',
    description: 'A comprehensive flood risk assessment system.',
    link: 'https://flood-analyzer.vercel.app/',
    image: '/flood.jpeg',
    category: 'Data Science & ML'
  },
  {
    id: 'aqua-horizon',
    title: 'Aqua-Horizon',
    description: 'Citizen science platform that enables users to monitor, report, and discuss water quality issues in their communities.',
    link: 'https://github.com/DonOmbisi/aqua/releases/download/v1.0/app-release.apk',
    image: '/aqua.jpeg',
    category: 'Citizen Science'
  },
  {
    id: 'drug-research',
    title: 'Drug-research',
    description: 'A drug discovery and protein-binding prediction tool built with the latest in machine learning and natural language processing (NLP) technology.',
    link: 'https://drugresearch-zeta.vercel.app/auth-page/signin',
    image: '/drug.jpeg',
    category: 'AI & Healthcare'
  },
  {
    id: 'threadcraft-ai',
    title: 'ThreadcraftAI',
    description: 'AI-powered content generation tool utilizing GPT models and React that helps users create engaging social media threads with 40% higher engagement rates.',
    link: 'https://threadcraftai-kappa.vercel.app/',
    image: '/thread.jpeg',
    category: 'AI & Content'
  },
  {
    id: 'lingua-speak',
    title: 'Lingua-Speak',
    description: 'Real-time language translation application built with Next.js and TensorFlow that supports 20+ languages with 95% translation accuracy.',
    link: 'https://lingua-speak-theta.vercel.app/',
    image: '/lingua.jpeg',
    category: 'AI & Translation'
  },
  {
    id: 'livedocs',
    title: 'LiveDocs',
    description: 'Real-time collaborative text editor using WebSockets and React that allows multiple users to edit documents simultaneously with conflict resolution.',
    link: 'https://collaborativeeditor-lime.vercel.app/',
    image: '/live.jpeg',
    category: 'Collaboration Tools'
  },
  {
    id: 'care-pulse',
    title: 'CARE-PULSE',
    description: 'Healthcare platform that streamlines patient registration, appointment scheduling, and medical records.',
    link: 'https://healthcare-lac.vercel.app/',
    image: '/health.jpeg',
    category: 'Healthcare'
  }
];

export default function MainProject() {
  const { theme } = useTheme();

  return (
    <Section className={styles.mainProject}>
      <div className={styles.header}>
        <Heading level={1} className={styles.title}>
          Main Projects
        </Heading>
        <Text size="l" as="p" className={styles.description}>
          A comprehensive showcase of my major projects spanning AI/ML, Web3, healthcare, 
          data science, and collaborative tools. Each project demonstrates my expertise 
          in full-stack development, machine learning, and innovative problem-solving.
        </Text>
      </div>

      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.projectImage}>
              <Image
                reveal
                key={theme}
                srcSet={`${project.image} 1280w, ${project.image} 2560w`}
                width={1280}
                height={800}
                placeholder={project.image}
                sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
                alt={`${project.title} - ${project.description}`}
              />
            </div>
            
            <div className={styles.projectContent}>
              <div className={styles.projectMeta}>
                <span className={styles.category}>{project.category}</span>
                <span className={styles.projectNumber}>#{String(index + 1).padStart(2, '0')}</span>
              </div>
              
              <Heading level={3} className={styles.projectTitle}>
                {project.title}
              </Heading>
              
              <Text size="m" as="p" className={styles.projectDescription}>
                {project.description}
              </Text>
              
              <div className={styles.projectActions}>
                {project.link !== '#' ? (
                  <Button
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    icon="arrow-right"
                    className={styles.viewButton}
                  >
                    View Live Site
                  </Button>
                ) : (
                  <Button
                    href="#"
                    disabled
                    icon="arrow-right"
                    className={styles.viewButton}
                  >
                    Coming Soon
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <Text size="l" as="p" className={styles.footerText}>
          Interested in collaborating on a project or discussing opportunities? 
          Feel free to <Link href="/contact">get in touch</Link>.
        </Text>
      </div>
    </Section>
  );
}

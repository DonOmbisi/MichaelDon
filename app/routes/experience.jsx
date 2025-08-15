import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { Button } from '~/components/button';
import { Link } from '~/components/link';
import {
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from '~/components/experience/experience.module.css';

const title = 'Professional Experience';
const description =
  'A comprehensive overview of my professional journey in software development, data science, and IT administration across various organizations and technologies.';
const roles = [
  'Systems Developer',
  'ICT Officer',
  'Data Science Intern',
  'Android & ML Developer',
  'IT Administrator',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Experience' });
};

export default function Experience() {
  return (
    <>
      <ProjectContainer>
        <ProjectHeader
          title={title}
          description={description}
          roles={roles}
        />
        
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectTextRow width="s">
              <ProjectSectionHeading>Career Overview</ProjectSectionHeading>
              <ProjectSectionText>
                My professional journey spans across multiple domains including software development, 
                data science, machine learning, and IT administration. I've worked with both local 
                organizations in Kenya and international remote teams, gaining diverse experience 
                in building scalable applications, implementing AI/ML solutions, and optimizing 
                business processes.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="none">
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <div className={styles.experienceItem}>
                <div className={styles.jobHeader}>
                  <Heading level={4} className={styles.jobTitle}>
                    Systems Developer
                  </Heading>
                  <div className={styles.jobMeta}>
                    <span className={styles.company}>PostBank</span>
                    <span className={styles.location}>Nairobi, Kenya</span>
                    <span className={styles.duration}>April 2024 - September 2024</span>
                  </div>
                </div>
                <ul className={styles.achievements}>
                  <li>Developed, redesigned and optimized the Helpdesk Ticketing System, reducing resolution time by <strong>40%</strong></li>
                  <li>Upgraded network infrastructure across 3 offices, boosting connectivity by <strong>25%</strong></li>
                  <li>Automated system backups with Python, reducing manual effort by <strong>85%</strong></li>
                </ul>
              </div>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="none">
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <div className={styles.experienceItem}>
                <div className={styles.jobHeader}>
                  <Heading level={4} className={styles.jobTitle}>
                    ICT Officer
                  </Heading>
                  <div className={styles.jobMeta}>
                    <span className={styles.company}>National Treasury</span>
                    <span className={styles.location}>Nairobi, Kenya</span>
                    <span className={styles.duration}>April 2023 - October 2023</span>
                  </div>
                </div>
                <ul className={styles.achievements}>
                  <li>Developed a file management system that cut document retrieval time by <strong>60%</strong></li>
                  <li>Implemented network security enhancements, decreasing vulnerability incidents by <strong>75%</strong></li>
                  <li>Built an automated user access system for streamlined onboarding</li>
                </ul>
              </div>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="none">
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <div className={styles.experienceItem}>
                <div className={styles.jobHeader}>
                  <Heading level={4} className={styles.jobTitle}>
                    Data Science Intern
                  </Heading>
                  <div className={styles.jobMeta}>
                    <span className={styles.company}>Intel Indexer LLC</span>
                    <span className={styles.location}>Remote</span>
                    <span className={styles.duration}>October 2024 - March 2025</span>
                  </div>
                </div>
                <ul className={styles.achievements}>
                  <li>Built a supervised ML model for stock prediction with <strong>87% accuracy</strong></li>
                  <li>Developed LSTM models with TensorFlow for time series forecasting</li>
                  <li>Created interactive D3.js dashboards for financial insights</li>
                </ul>
              </div>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="none">
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <div className={styles.experienceItem}>
                <div className={styles.jobHeader}>
                  <Heading level={4} className={styles.jobTitle}>
                    Android and ML Developer
                  </Heading>
                  <div className={styles.jobMeta}>
                    <span className={styles.company}>Muito Incorporation</span>
                    <span className={styles.location}>Remote Ghaziabad, India</span>
                    <span className={styles.duration}>January 2023 - April 2023</span>
                  </div>
                </div>
                <ul className={styles.achievements}>
                  <li>Co-developed a location-based app with <strong>5,000+ downloads</strong></li>
                  <li>Implemented facial detection with <strong>92% accuracy</strong> and OCR algorithms</li>
                  <li>Collaborated on cross-platform development with a 6-person team</li>
                </ul>
              </div>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="none">
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <div className={styles.experienceItem}>
                <div className={styles.jobHeader}>
                  <Heading level={4} className={styles.jobTitle}>
                    Android Developer
                  </Heading>
                  <div className={styles.jobMeta}>
                    <span className={styles.company}>FreeCopy Pvt. Ltd.</span>
                    <span className={styles.location}>Remote Ahmedabad, India</span>
                    <span className={styles.duration}>January 2024 - April 2024</span>
                  </div>
                </div>
                <ul className={styles.achievements}>
                  <li>Migrated backend to Firebase, reducing latency by <strong>35%</strong></li>
                  <li>Improved UI/UX for mobile apps, increasing engagement by <strong>28%</strong></li>
                  <li>Delivered features on time in agile development sprints</li>
                </ul>
              </div>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="none">
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <div className={styles.experienceItem}>
                <div className={styles.jobHeader}>
                  <Heading level={4} className={styles.jobTitle}>
                    IT Administrator
                  </Heading>
                  <div className={styles.jobMeta}>
                    <span className={styles.company}>Kenyariri & Associates (Law firm)</span>
                    <span className={styles.location}>Nairobi</span>
                    <span className={styles.duration}>April 2025 - July 2025</span>
                  </div>
                </div>
                <ul className={styles.achievements}>
                  <li>Implemented and configured POS systems to streamline transactions and boost efficiency</li>
                  <li>Built a custom web app for case management and client services</li>
                  <li>Trained and supported staff for smooth system adoption</li>
                </ul>
              </div>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="none">
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <Button
                  href="/contact"
                  icon="send"
                >
                  Get In Touch
                </Button>
              </div>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
}

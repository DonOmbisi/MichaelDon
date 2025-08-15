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
import styles from './flood-analyzer.module.css';
import { Button } from '~/components/button';

const title = 'Flood-Analyzer - Risk Assessment System';
const description =
  'A comprehensive flood risk assessment system using machine learning and data analytics for environmental monitoring and disaster prevention.';
const roles = [
  'Data Science',
  'Machine Learning Engineering',
  'Full Stack Development',
  'GIS Integration',
  'System Architecture',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const FloodAnalyzer = () => {
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
          src={isDark ? '/flood-analyzer-dark-bg.jpg' : '/flood-analyzer-light-bg.jpg'}
          placeholder={isDark ? '/flood-analyzer-dark-bg-placeholder.jpg' : '/flood-analyzer-light-bg-placeholder.jpg'}
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
              srcSet={`/flood.jpeg 1280w, /flood.jpeg 2560w`}
              width={1280}
              height={800}
              placeholder="/flood.jpeg"
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Flood-Analyzer risk assessment dashboard showing environmental monitoring and flood prediction features."
            />
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Button
                href="https://flood-analyzer.vercel.app/"
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
              <ProjectSectionHeading>Key Features</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <ul>
                  <li><strong>Real-time Monitoring:</strong> Continuous data collection from multiple sensors and weather stations</li>
                  <li><strong>ML-Powered Predictions:</strong> Advanced algorithms for flood risk assessment and forecasting</li>
                  <li><strong>GIS Integration:</strong> Geographic Information System for spatial analysis and mapping</li>
                  <li><strong>Early Warning System:</strong> Automated alerts and notifications for high-risk areas</li>
                  <li><strong>Data Visualization:</strong> Interactive dashboards and maps for risk assessment</li>
                  <li><strong>Historical Analysis:</strong> Pattern recognition from past flood events</li>
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
                  <li><strong>Frontend:</strong> React.js with TypeScript, D3.js for data visualization</li>
                  <li><strong>Backend:</strong> Python with FastAPI, Node.js for real-time data processing</li>
                  <li><strong>Machine Learning:</strong> TensorFlow, scikit-learn for predictive modeling</li>
                  <li><strong>Data Processing:</strong> Apache Spark, Pandas for large-scale data analysis</li>
                  <li><strong>GIS:</strong> PostGIS, GeoPandas for spatial data management</li>
                  <li><strong>Cloud Infrastructure:</strong> AWS for scalable data processing and storage</li>
                </ul>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="none">
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Data Sources & Processing</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <ul>
                  <li><strong>Weather Data:</strong> Real-time weather station data, satellite imagery, and radar information</li>
                  <li><strong>Hydrological Data:</strong> River levels, flow rates, and water quality measurements</li>
                  <li><strong>Environmental Sensors:</strong> Soil moisture, temperature, and humidity readings</li>
                  <li><strong>Historical Records:</strong> Past flood events, damage assessments, and recovery data</li>
                  <li><strong>Satellite Imagery:</strong> Remote sensing data for land use and terrain analysis</li>
                  <li><strong>Social Media:</strong> Crowdsourced reports and real-time incident data</li>
                </ul>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="none">
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Machine Learning Models</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <ul>
                  <li><strong>LSTM Networks:</strong> Time series forecasting for water level predictions</li>
                  <li><strong>Random Forest:</strong> Risk classification based on multiple environmental factors</li>
                  <li><strong>Neural Networks:</strong> Pattern recognition in weather and hydrological data</li>
                  <li><strong>Ensemble Methods:</strong> Combined predictions from multiple models for accuracy</li>
                  <li><strong>Anomaly Detection:</strong> Identification of unusual patterns that may indicate flood risk</li>
                </ul>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="none">
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Impact & Applications</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <ul>
                  <li><strong>Government Agencies:</strong> Emergency response planning and resource allocation</li>
                  <li><strong>Urban Planning:</strong> Infrastructure development and flood mitigation strategies</li>
                  <li><strong>Insurance Companies:</strong> Risk assessment for property and flood insurance</li>
                  <li><strong>Agriculture:</strong> Crop protection and irrigation management</li>
                  <li><strong>Public Safety:</strong> Early warning systems for communities at risk</li>
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
                Planned features include integration with IoT sensors for real-time monitoring, 
                mobile applications for field data collection, and AI-powered damage assessment 
                using computer vision. The system will also incorporate climate change models 
                for long-term risk assessment and adaptation planning.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};

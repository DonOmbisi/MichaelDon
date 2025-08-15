import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'A comprehensive list of tools, technologies, and software I use for full-stack development, data science, and AI/ML projects',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="A comprehensive list of tools, technologies, and software I use on a daily basis for full-stack development, data science, machine learning, and cybersecurity projects."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    I use <Link href="https://vscodium.com/">VSCodium</Link> as my primary code editor, 
                    with the Tokyo Night theme and Operator Mono as my preferred typeface for coding.
                  </ListItem>
                  <ListItem>
                    <Link href="https://reactjs.org/">React</Link> and <Link href="https://nextjs.org/">Next.js</Link> 
                    are my go-to frontend frameworks for building modern web applications with excellent performance.
                  </ListItem>
                  <ListItem>
                    For backend development, I primarily use <Link href="https://nodejs.org/">Node.js</Link> with 
                    Express.js, and <Link href="https://www.python.org/">Python</Link> with FastAPI or Django for 
                    building robust APIs and web services.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.tensorflow.org/">TensorFlow</Link> and <Link href="https://pytorch.org/">PyTorch</Link> 
                    are my preferred frameworks for machine learning and deep learning projects, along with 
                    <Link href="https://scikit-learn.org/">scikit-learn</Link> for traditional ML algorithms.
                  </ListItem>
                  <ListItem>
                    For database management, I work with <Link href="https://www.mongodb.com/">MongoDB</Link>, 
                    <Link href="https://www.postgresql.org/">PostgreSQL</Link>, and <Link href="https://www.mysql.com/">MySQL</Link> 
                    depending on the project requirements.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.docker.com/">Docker</Link> and <Link href="https://kubernetes.io/">Kubernetes</Link> 
                    for containerization and orchestration, along with <Link href="https://aws.amazon.com/">AWS</Link> 
                    and <Link href="https://cloud.google.com/">Google Cloud Platform</Link> for cloud deployment.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Data Science & Analytics</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://jupyter.org/">Jupyter Notebooks</Link> and <Link href="https://colab.research.google.com/">Google Colab</Link> 
                    for data analysis, experimentation, and creating reproducible research workflows.
                  </ListItem>
                  <ListItem>
                    <Link href="https://pandas.pydata.org/">Pandas</Link> and <Link href="https://numpy.org/">NumPy</Link> 
                    for data manipulation and numerical computing, along with <Link href="https://matplotlib.org/">Matplotlib</Link> 
                    and <Link href="https://seaborn.pydata.org/">Seaborn</Link> for data visualization.
                  </ListItem>
                  <ListItem>
                    <Link href="https://plotly.com/">Plotly</Link> and <Link href="https://d3js.org/">D3.js</Link> 
                    for creating interactive dashboards and advanced data visualizations for web applications.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.tableau.com/">Tableau</Link> and <Link href="https://powerbi.microsoft.com/">Power BI</Link> 
                    for business intelligence and creating comprehensive data reports and analytics dashboards.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Cybersecurity & DevOps</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://www.wireshark.org/">Wireshark</Link> and <Link href="https://nmap.org/">Nmap</Link> 
                    for network analysis and security auditing, along with <Link href="https://www.metasploit.com/">Metasploit</Link> 
                    for penetration testing and vulnerability assessment.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.ansible.com/">Ansible</Link> and <Link href="https://www.terraform.io/">Terraform</Link> 
                    for infrastructure automation and configuration management across cloud environments.
                  </ListItem>
                  <ListItem>
                    <Link href="https://jenkins.io/">Jenkins</Link> and <Link href="https://github.com/features/actions">GitHub Actions</Link> 
                    for continuous integration and deployment pipelines, ensuring reliable software delivery.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.vagrantup.com/">Vagrant</Link> and <Link href="https://www.virtualbox.org/">VirtualBox</Link> 
                    for creating reproducible development environments and testing across different operating systems.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>System</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Desktop</TableHeadCell>
                    <TableCell>Custom built workstation with Ryzen 7, 32GB RAM, RTX 3070</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Operating system</TableHeadCell>
                    <TableCell>Ubuntu 22.04 LTS / Windows 11 (Dual Boot)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Browser</TableHeadCell>
                    <TableCell>Google Chrome / Firefox Developer Edition</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Monitor</TableHeadCell>
                    <TableCell>Dual 27" 1440p IPS monitors for multi-tasking</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Keyboard</TableHeadCell>
                    <TableCell>Mechanical keyboard with Cherry MX Brown switches</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Mouse</TableHeadCell>
                    <TableCell>Logitech MX Master 3</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Laptop</TableHeadCell>
                    <TableCell>Dell XPS 15 with Ubuntu for mobile development</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Headphones</TableHeadCell>
                    <TableCell>Sony WH-1000XM4 / Apple AirPods Pro</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Microphone</TableHeadCell>
                    <TableCell>Blue Yeti X for video calls and content creation</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};

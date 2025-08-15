export const certifications = [
  {
    id: 'ethical-hacker-cisco',
    title: 'Ethical Hacker Certification',
    issuer: 'Cisco',
    category: 'Cybersecurity',
    date: '2024',
    featured: true,
    description: 'Comprehensive ethical hacking and penetration testing certification covering network security, vulnerability assessment, and ethical hacking methodologies.'
  },
  {
    id: 'cyber-threat-management-cisco',
    title: 'Cyber Threat Management',
    issuer: 'Cisco',
    category: 'Cybersecurity',
    date: '2024',
    featured: false,
    description: 'Advanced threat detection, analysis, and response techniques for modern cybersecurity environments.'
  },
  {
    id: 'network-defense-cisco',
    title: 'Network Defense',
    issuer: 'Cisco',
    category: 'Cybersecurity',
    date: '2024',
    featured: false,
    description: 'Network security fundamentals, defense strategies, and security infrastructure implementation.'
  },
  {
    id: 'junior-cybersecurity-analyst-cisco',
    title: 'Junior Cybersecurity Analyst',
    issuer: 'Cisco',
    category: 'Cybersecurity',
    date: '2024',
    featured: false,
    description: 'Entry-level cybersecurity analysis, threat monitoring, and security operations fundamentals.'
  },
  {
    id: 'networking-basics-cisco',
    title: 'Networking Basics',
    issuer: 'Cisco',
    category: 'Networking',
    date: '2024',
    featured: false,
    description: 'Fundamental networking concepts, protocols, and network infrastructure basics.'
  },
  {
    id: 'network-devices-configurations-cisco',
    title: 'Network Devices and Configurations',
    issuer: 'Cisco',
    category: 'Networking',
    date: '2024',
    featured: false,
    description: 'Network device configuration, management, and troubleshooting techniques.'
  },
  {
    id: 'quantum-business-foundations-ibm',
    title: 'Quantum Business Foundations',
    issuer: 'IBM',
    category: 'Quantum Computing',
    date: '2024',
    featured: false,
    description: 'Business applications and strategic implications of quantum computing technologies.'
  },
  {
    id: 'ai-solutions-cisco-infrastructure-cisco',
    title: 'AI Solutions on Cisco Infrastructure Essentials (DCAIE)',
    issuer: 'Cisco',
    category: 'Artificial Intelligence',
    date: '2024',
    featured: false,
    description: 'AI implementation and optimization on Cisco infrastructure platforms.'
  },
  {
    id: 'microsoft-office-specialist-icdl',
    title: 'Microsoft Office Specialist - Word, Excel, Database',
    issuer: 'ICDL Africa',
    category: 'Office Productivity',
    date: '2024',
    featured: false,
    description: 'Advanced Microsoft Office applications proficiency including Word, Excel, and Database management.'
  },
  {
    id: 'applied-data-science-lab-worldquant',
    title: 'Applied Data Science Lab',
    issuer: 'WorldQuant University',
    category: 'Data Science',
    date: '2024',
    featured: false,
    description: 'Practical data science applications and laboratory-based learning in quantitative analysis.'
  },
  {
    id: 'quantum-computing-basics-ibm',
    title: 'Quantum Computing - Basics of Quantum Information',
    issuer: 'IBM',
    category: 'Quantum Computing',
    date: '2024',
    featured: false,
    description: 'Fundamental quantum computing principles and quantum information theory.'
  }
];

export async function getCertifications() {
  // Sort certifications by date (newest first) and then by featured status
  return certifications.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return new Date(b.date) - new Date(a.date);
  });
}

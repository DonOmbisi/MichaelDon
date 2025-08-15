import { baseMeta } from '~/utils/meta';
import { getCertifications } from './certifications.server';
import { json } from '@remix-run/node';

export async function loader() {
  const allCertifications = await getCertifications();
  const featured = allCertifications.filter(cert => cert.featured)[0];
  const certifications = allCertifications.filter(cert => featured?.id !== cert.id);

  return json({ certifications, featured });
}

export function meta() {
  return baseMeta({
    title: 'Certifications',
    description:
      'Professional certifications and qualifications in cybersecurity, networking, quantum computing, and data science.',
  });
}

export { Certifications as default } from './certifications';

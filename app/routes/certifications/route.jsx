import { redirect } from '@remix-run/node';

export async function loader() {
  // Redirect to the main certifications page since we don't have individual certification pages
  return redirect('/certifications');
}

export default function Certification() {
  return null;
}

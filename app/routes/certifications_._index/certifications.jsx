import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { useReducedMotion } from 'framer-motion';
import { useWindowSize } from '~/hooks';
import { Link as RouterLink, useLoaderData } from '@remix-run/react';
import { useState, useEffect } from 'react';
import { classes, cssProps } from '~/utils/style';
import styles from './certifications.module.css';

function CertificationItem({ id, title, issuer, category, date, featured, description, index }) {
  const [hovered, setHovered] = useState(false);
  const reduceMotion = useReducedMotion();

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <article
      className={styles.certification}
      data-featured={!!featured}
      style={index !== undefined ? cssProps({ delay: index * 100 + 200 }) : undefined}
    >
      {featured && (
        <Text className={styles.certificationLabel} size="s">
          Featured
        </Text>
      )}
      {featured && (
        <div className={styles.certificationImage}>
          <div style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, var(--accent) 0%, var(--primary) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '2rem',
            fontWeight: 'bold'
          }}>
            {title.split(' ').slice(0, 2).join(' ')}
          </div>
        </div>
      )}
      <div
        className={styles.certificationLink}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.certificationDetails}>
          <div aria-hidden className={styles.certificationDate}>
            <Divider notchWidth="64px" notchHeight="8px" />
            {date}
          </div>
          <Heading as="h2" level={featured ? 2 : 4}>
            {title}
          </Heading>
          <Text size={featured ? 'l' : 's'} as="p">
            {description}
          </Text>
          <div className={styles.certificationFooter}>
            <Text className={styles.issuer} size="s">
              {issuer}
            </Text>
            <Text size="s" style={{ color: 'var(--accent)' }}>
              {category}
            </Text>
          </div>
        </div>
      </div>
      {featured && (
        <Text aria-hidden className={styles.certificationTag} size="s">
          {category}
        </Text>
      )}
    </article>
  );
}

function SkeletonCertification({ index }) {
  return (
    <article
      aria-hidden="true"
      className={classes(styles.certification, styles.skeleton)}
      data-featured="false"
      style={index !== undefined ? cssProps({ delay: index * 100 + 200 }) : undefined}
    >
      <div className={styles.certificationLink}>
        <div className={styles.certificationDetails}>
          <div aria-hidden className={styles.certificationDate}>
            <Divider notchWidth="64px" notchHeight="8px" />
            Coming soon...
          </div>
          <Heading
            className={styles.skeletonBone}
            as="h2"
            level={4}
            style={{ height: 24, width: '70%' }}
          />
          <Text
            className={styles.skeletonBone}
            size="s"
            as="p"
            style={{ height: 90, width: '100%' }}
          />
          <div className={styles.certificationFooter}>
            <Text className={styles.issuer} size="s">
              Issuer
            </Text>
            <Text size="s" style={{ color: 'var(--accent)' }}>
              Category
            </Text>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Certifications() {
  const { certifications, featured } = useLoaderData();
  const { width } = useWindowSize();
  const singleColumnWidth = 1190;
  const isSingleColumn = width <= singleColumnWidth;

  const certificationsHeader = (
    <header className={styles.header}>
      <Heading className={styles.heading} level={5} as="h1">
        <DecoderText text="Professional Certifications" />
      </Heading>
      <Barcode className={styles.barcode} />
    </header>
  );

  const certificationList = (
    <div className={styles.list}>
      {!isSingleColumn && certificationsHeader}
      {certifications.map((certification, index) => (
        <CertificationItem key={certification.id} index={index} {...certification} />
      ))}
      {Array(2)
        .fill()
        .map((skeleton, index) => (
          <SkeletonCertification key={index} index={index} />
        ))}
    </div>
  );

  const featuredCertification = featured ? <CertificationItem {...featured} /> : null;

  return (
    <article className={styles.certifications}>
      <Section className={styles.content}>
        {!isSingleColumn && (
          <div className={styles.grid}>
            {certificationList}
            {featuredCertification}
          </div>
        )}
        {isSingleColumn && (
          <div className={styles.grid}>
            {certificationsHeader}
            {featuredCertification}
            {certificationList}
          </div>
        )}
      </Section>
      <Footer />
    </article>
  );
}

function Barcode({ className }) {
  return (
    <svg
      className={className}
      width="153"
      height="20"
      fill="currentColor"
      viewBox="0 0 153 20"
    >
      <path
        fillOpacity=".6"
        d="M153 0v20h-2V0h2Zm-4 0v20h-4V0h4Zm-6 0v20h-2V0h2Zm-4 4v3h-2V4h2Zm-5 0V0h3v4h-3Zm-2 0h2v6h-2V4Zm0 0h-2V0h2v4Zm-4-4v4h-4v5h-2v4h-5V9h3V6h-5V0h13Zm-11 13v3h-2v-3h2Zm-4-13v6h-2v4h2v4h-2v2h2v4h-4V0h4Zm-6 4V0h-2v4h2Zm-1 6V7h-4V4h-2V0h-2v4h-2V0H86v4h-2v3h-2v2h-2v4h6v3h-2v4h6v-4h-2v-3h-2V9h-2V7h4V4h3v9h2v7h7v-4h-5v-3h-2V9h2V7h3v3h2v4h6v-4ZM74 7v3h-2v2h2v8h-4V0h8v5h-3V4h-3v3h2Zm28 13h4v-4h-4v4Zm28-6v-4h-2v6h2v4h2v-6h-2Zm9 2v-6h-2v6h-2v4h4v-4Zm-12 4v-4h-4v4h4ZM0 20h2V0H0v20Zm4 0h4V0H4v20Zm6 0h2V0h-2v20Zm5 0h7V0h-7v20Zm12 0h-3V0h3v20Zm5 0h3v-4h5v-6h-5V6h7V3h3V0h-7v3h-3V0h-3v20ZM52 3v3h-3v3h-4V6h1V3h6Zm23 13h6v4h-6v-4Zm-29-6v3h3v-3h3v3h-2v6h-3v-3h-2v-3h-2v-3h3Zm8 6v3h-2v-3h2Zm3 0v3h2v-3h2v-3h-2v3h-2Zm0 0v-6h-3v6h3Zm4-7V6h2V0h-2v6h-2v3h2Zm5-3v3h-2V6h2Zm2 0h-2V3h2v3Zm-9-3V0h-2v3h2Z"
      />
    </svg>
  );
}

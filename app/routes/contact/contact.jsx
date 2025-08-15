import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Icon } from '~/components/icon';
import { Input } from '~/components/input';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { useFormInput } from '~/hooks';
import { useRef, useState } from 'react';
import { cssProps, msToNum, numToMs } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './contact.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Contact',
    description:
      'Get in touch with Don Michael Ombisi for collaboration opportunities, project discussions, or just to say hello. Available for full-stack development, data science, and AI/ML projects.',
  });
};

const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;
const EMAIL_PATTERN = /(.+)@(.+){2,}\.(.+){2,}/;

export default function Contact() {
  const errorRef = useRef();
  const email = useFormInput('');
  const message = useFormInput('');
  const name = useFormInput('');
  const initDelay = tokens.base.durationS;
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setErrors({});

    // Validation
    const newErrors = {};
    
    if (!name.value.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (!email.value || !EMAIL_PATTERN.test(email.value)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!message.value.trim()) {
      newErrors.message = 'Please enter a message.';
    }

    if (email.value.length > MAX_EMAIL_LENGTH) {
      newErrors.email = `Email address must be shorter than ${MAX_EMAIL_LENGTH} characters.`;
    }

    if (message.value.length > MAX_MESSAGE_LENGTH) {
      newErrors.message = `Message must be shorter than ${MAX_MESSAGE_LENGTH} characters.`;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSending(false);
      return;
    }

    try {
      // Using a simple form submission service (Formspree alternative)
      const response = await fetch('https://formspree.io/f/xdkdjgqp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          message: message.value,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        // Reset form
        name.setValue('');
        email.setValue('');
        message.setValue('');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setErrors({ submit: 'Failed to send message. Please try again or contact me directly at ombisimichael@gmail.com' });
    } finally {
      setSending(false);
    }
  };

  return (
    <Section className={styles.contact}>
      {/* Resume Button */}
      <div className={styles.resumeSection}>
        <Button
          className={styles.resumeButton}
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          icon="download"
          secondary
        >
          Download Resume (PDF)
        </Button>
      </div>
      
      <Transition unmount in={!success} timeout={1600}>
        {({ status, nodeRef }) => (
          <form
            className={styles.form}
            onSubmit={handleSubmit}
            ref={nodeRef}
          >
            <Heading
              className={styles.title}
              data-status={status}
              level={3}
              as="h1"
              style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            >
              <DecoderText text="Say hello" start={status !== 'exited'} delay={300} />
            </Heading>
            <Divider
              className={styles.divider}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
            />
            <Input
              required
              className={styles.input}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay)}
              autoComplete="name"
              label="Your name"
              type="text"
              name="name"
              maxLength={100}
              {...name}
            />
            <Input
              required
              className={styles.input}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay)}
              autoComplete="email"
              label="Your email"
              type="email"
              name="email"
              maxLength={MAX_EMAIL_LENGTH}
              {...email}
            />
            <Input
              required
              multiline
              className={styles.input}
              data-status={status}
              style={getDelay(tokens.base.durationS, initDelay)}
              autoComplete="off"
              label="Message"
              name="message"
              maxLength={MAX_MESSAGE_LENGTH}
              {...message}
            />
            <Transition
              unmount
              in={!sending && Object.keys(errors).length > 0}
              timeout={msToNum(tokens.base.durationM)}
            >
              {({ status: errorStatus, nodeRef }) => (
                <div
                  className={styles.formError}
                  ref={nodeRef}
                  data-status={errorStatus}
                  style={cssProps({
                    height: errorStatus ? errorRef.current?.offsetHeight : 0,
                  })}
                >
                  <div className={styles.formErrorContent} ref={errorRef}>
                    <div className={styles.formErrorMessage}>
                      <Icon className={styles.formErrorIcon} icon="error" />
                      {errors.name}
                      {errors.email}
                      {errors.message}
                      {errors.submit}
                    </div>
                  </div>
                </div>
              )}
            </Transition>
            <Button
              className={styles.button}
              data-status={status}
              data-sending={sending}
              style={getDelay(tokens.base.durationM, initDelay)}
              disabled={sending}
              loading={sending}
              loadingText="Sending..."
              icon="send"
              type="submit"
            >
              Send message
            </Button>
          </form>
        )}
      </Transition>
      <Transition unmount in={success}>
        {({ status, nodeRef }) => (
          <div className={styles.complete} aria-live="polite" ref={nodeRef}>
            <Heading
              level={3}
              as="h3"
              className={styles.completeTitle}
              data-status={status}
            >
              Message Sent
            </Heading>
            <Text
              size="l"
              as="p"
              className={styles.completeText}
              data-status={status}
              style={getDelay(tokens.base.durationXS)}
            >
              I'll get back to you within a couple days, sit tight
            </Text>
            <Button
              secondary
              iconHoverShift
              className={styles.completeButton}
              data-status={status}
              style={getDelay(tokens.base.durationM)}
              href="/"
              icon="chevron-right"
            >
              Back to homepage
            </Button>
          </div>
        )}
      </Transition>
      <Footer className={styles.footer} />
    </Section>
  );
}

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}

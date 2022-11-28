import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContent)}>
        <img src = "/img/speak_logotype_reversed.svg" alt="Speak_ Logo" className={styles.heroLogo}/>
        <h1 className={styles.hero__title}>Tech Interview Prep Guide</h1>
        <h2 className={styles.hero__subtitle}>A free resource to help you ace your interviews and get hired.</h2>
        <div className={styles.hero__btn__div}>
          <Link className={clsx('btn', styles.heroBtn)} to="/docs/welcome/about-this-guide">
            Dive into the guide
          </Link>
        </div>
        <iframe src="https://ghbtns.com/github-btn.html?user=speakcareers&amp;repo=tech-interview-prep-guide&amp;type=star&amp;count=true&amp;size=small" frameborder="0" scrolling="0" width="150" height="20" title="GitHub Stars"></iframe>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Prepare for technical interviews with a free cohort-based course."
    >
      <HomepageHeader />
      <div className={styles.section}>
        <div className={clsx('container', styles.narrow)}>
          <h2>Get ready for your tech interviews.</h2>
          <p>Twice a month for over a year, Speak_ has run a free cohort-based course that helps software engineers get prepared for their tech interviews at any company. This is the guide that grew out of our learnings from running those cohorts.</p>
          <p>Designed to introduce all the possible challenges you might face in a tech interview, this guide can help you know what to expect and how to prepare.</p>
          <p>We decided to open source it so that anyone can get access to this knowledge and so our community can take an active part in improving the content. This helps us grow our talent base, and allows us to support more qualified underrepresented candidates in finding jobs, which is our mission.</p>
        </div>
      </div>
      <div className={styles.section}>
        <div className="container">
          <div className="row">
            <div className={clsx('col col--6')}>
              <img src="/img/tip-image-1.png" />
            </div>
            <div className={clsx('col col--6', styles.verticalCenter)}>
              <h2>Inside the guide.</h2>
              <ul>
                <li>Technical hiring process deep dive</li>
                <li>Hard &amp; soft skill frameworks</li>
                <li>Recruiter-friendly resume template</li>
                <li>Data structures & algorithms study plan</li>
                <li>Remote interview checklist</li>
                <li>And lots more!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={clsx(styles.section, styles.bgColor1)}>
        <div className={clsx('container', styles.narrow)}>
          <h2>Don't go it alone.</h2>
          <p>Preparing for tech interviews is hard. You don’t have to do it all by yourself though. Join your peers in a 2-week cohort-based course to sharpen your hard and soft skills. It’s totally free — no strings attached.</p>
          <p>Speak_ Tech Interview Prep cohorts include:</p>
          <ul>
            <li>Putting this guide into practice</li>
            <li>Live, interactive workshops</li>
            <li>Multiple pair sessions with peers</li>
            <li>Access to private discord chat channels</li>
            <li>Advice from engineers recently hired</li>
            <li>Support from the Speak_ team</li>
          </ul>
          <Link className={clsx('btn')} to="https://speak.careers">Join a cohort!</Link>
        </div>
      </div>
    </Layout>
  );
}

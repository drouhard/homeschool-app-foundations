'use client';

import { useState } from 'react';
import styles from './Welcome.module.css';

export function Welcome() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to Homeschool App Foundations</h1>

        <p className={styles.description}>
          A modern, production-ready foundation built with Next.js 14, TypeScript, and best practices.
        </p>

        <div className={styles.features}>
          <FeatureCard
            icon="⚡"
            title="Modern Stack"
            description="Next.js 14 with App Router, React Server Components, and TypeScript"
          />
          <FeatureCard
            icon="🛡️"
            title="Type Safe"
            description="Strict TypeScript configuration with comprehensive type checking"
          />
          <FeatureCard
            icon="✨"
            title="Code Quality"
            description="ESLint, Prettier, and pre-commit hooks ensure consistent code"
          />
          <FeatureCard
            icon="🧪"
            title="Testing Ready"
            description="Vitest and React Testing Library configured and ready to use"
          />
          <FeatureCard
            icon="🚀"
            title="CI/CD Pipeline"
            description="GitHub Actions for automated testing, linting, and deployment"
          />
          <FeatureCard
            icon="🔒"
            title="Production Ready"
            description="Security headers, Docker setup, and best practices built-in"
          />
        </div>

        <div className={styles.interactive}>
          <h2>Interactive Demo</h2>
          <button
            className={styles.button}
            onClick={() => setCount((c) => c + 1)}
            type="button"
            aria-label="Increment counter"
          >
            Count: {count}
          </button>
          <p className={styles.hint}>
            This demonstrates client-side interactivity with React hooks
          </p>
        </div>

        <div className={styles.actions}>
          <a
            href="#getting-started"
            className={styles.primaryButton}
          >
            Get Started
          </a>
          <a
            href="https://github.com/drouhard/homeschool-app-foundations"
            className={styles.secondaryButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardIcon}>{icon}</div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
}

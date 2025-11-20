import type { ReactNode } from 'react';
import styles from './Card.module.css';

/**
 * Card component props
 */
export interface CardProps {
  /**
   * Card title
   */
  title?: string;

  /**
   * Card content
   */
  children: ReactNode;

  /**
   * Optional footer content
   */
  footer?: ReactNode;

  /**
   * Card variant
   */
  variant?: 'default' | 'elevated' | 'outlined';

  /**
   * Optional CSS class name
   */
  className?: string;
}

/**
 * Reusable Card component
 * Demonstrates component composition and variant patterns
 */
export function Card({ title, children, footer, variant = 'default', className }: CardProps) {
  const cardClass = [styles.card, styles[variant], className].filter(Boolean).join(' ');

  return (
    <div className={cardClass}>
      {title && (
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
        </div>
      )}

      <div className={styles.content}>{children}</div>

      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
}

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from '../Card';

describe('Card', () => {
  it('should render children', () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('should render title when provided', () => {
    render(<Card title="Card Title">Card content</Card>);
    expect(screen.getByText('Card Title')).toBeInTheDocument();
  });

  it('should render footer when provided', () => {
    render(<Card footer={<button>Action</button>}>Card content</Card>);
    expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    const { container } = render(<Card className="custom-class">Card content</Card>);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('should render without title', () => {
    render(<Card>Card content</Card>);
    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });

  it('should render without footer', () => {
    const { container } = render(<Card>Card content</Card>);
    expect(container.querySelector('[class*="footer"]')).not.toBeInTheDocument();
  });
});

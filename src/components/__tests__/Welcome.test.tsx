import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Welcome } from '../Welcome';

describe('Welcome', () => {
  it('should render the welcome message', () => {
    render(<Welcome />);
    expect(screen.getByText(/Welcome to Homeschool App Foundations/i)).toBeInTheDocument();
  });

  it('should render feature cards', () => {
    render(<Welcome />);
    expect(screen.getByText('Modern Stack')).toBeInTheDocument();
    expect(screen.getByText('Type Safe')).toBeInTheDocument();
    expect(screen.getByText('Code Quality')).toBeInTheDocument();
    expect(screen.getByText('Testing Ready')).toBeInTheDocument();
    expect(screen.getByText('CI/CD Pipeline')).toBeInTheDocument();
    expect(screen.getByText('Production Ready')).toBeInTheDocument();
  });

  it('should increment counter when button is clicked', async () => {
    const user = userEvent.setup();
    render(<Welcome />);

    const button = screen.getByRole('button', { name: /Count:/i });
    expect(button).toHaveTextContent('Count: 0');

    await user.click(button);
    expect(button).toHaveTextContent('Count: 1');

    await user.click(button);
    expect(button).toHaveTextContent('Count: 2');
  });

  it('should have proper accessibility attributes on the button', () => {
    render(<Welcome />);
    const button = screen.getByRole('button', { name: /Increment counter/i });
    expect(button).toHaveAttribute('type', 'button');
  });

  it('should render action links', () => {
    render(<Welcome />);
    expect(screen.getByText('Get Started')).toBeInTheDocument();
    expect(screen.getByText('View on GitHub')).toBeInTheDocument();
  });
});

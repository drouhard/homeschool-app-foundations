# Contributing to Homeschool App Foundations

First off, thank you for considering contributing to Homeschool App Foundations! It's people like you that make this project better.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Process](#development-process)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing Guidelines](#testing-guidelines)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Issue Guidelines](#issue-guidelines)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm 9.0 or higher
- Git

### Setup

1. Fork the repository
2. Clone your fork:

   ```bash
   git clone https://github.com/YOUR_USERNAME/homeschool-app-foundations.git
   cd homeschool-app-foundations
   ```

3. Add upstream remote:

   ```bash
   git remote add upstream https://github.com/drouhard/homeschool-app-foundations.git
   ```

4. Install dependencies:

   ```bash
   npm install
   ```

5. Set up environment variables:

   ```bash
   cp .env.example .env.local
   ```

6. Initialize Husky:

   ```bash
   npm run prepare
   ```

7. Verify everything works:
   ```bash
   npm run validate
   ```

## 💻 Development Process

### 1. Create a Branch

Always create a new branch for your work:

```bash
git checkout -b feat/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

Branch naming conventions:

- `feat/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation changes
- `style/` - Code style changes
- `refactor/` - Code refactoring
- `perf/` - Performance improvements
- `test/` - Test additions or updates
- `chore/` - Maintenance tasks

### 2. Make Your Changes

- Write clean, readable code
- Follow the [coding standards](#coding-standards)
- Add tests for new functionality
- Update documentation as needed
- Keep commits focused and atomic

### 3. Test Your Changes

Before committing, ensure all checks pass:

```bash
# Run all validation checks
npm run validate

# Individual checks
npm run type-check    # TypeScript
npm run lint          # ESLint
npm run format:check  # Prettier
npm run test          # Vitest
```

### 4. Commit Your Changes

Follow the [commit message guidelines](#commit-message-guidelines):

```bash
git add .
git commit -m "feat: add new feature"
```

The pre-commit hooks will automatically:

- Run ESLint and fix issues
- Format code with Prettier
- Run TypeScript type checking
- Validate commit message format

### 5. Push and Create a Pull Request

```bash
git push origin feat/your-feature-name
```

Then create a pull request on GitHub.

## 🔄 Pull Request Process

### Before Submitting

- [ ] All tests pass (`npm run test`)
- [ ] Code is properly typed (`npm run type-check`)
- [ ] Code follows style guidelines (`npm run lint`)
- [ ] Code is formatted (`npm run format:check`)
- [ ] Documentation is updated
- [ ] Commits follow conventional commits
- [ ] Branch is up to date with main

### PR Guidelines

1. **Title**: Use conventional commit format
   - `feat: add user authentication`
   - `fix: resolve navigation bug`

2. **Description**: Include:
   - What changes were made
   - Why these changes were necessary
   - How to test the changes
   - Screenshots (if UI changes)
   - Related issue numbers

3. **Size**: Keep PRs focused and reasonably sized
   - Prefer multiple small PRs over one large PR
   - Split unrelated changes into separate PRs

4. **Reviews**:
   - Address all review comments
   - Request re-review after making changes
   - Be open to feedback and suggestions

### PR Template

```markdown
## Description

Brief description of the changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing

How to test these changes

## Checklist

- [ ] Tests pass locally
- [ ] Code follows style guidelines
- [ ] Documentation updated
- [ ] No new warnings or errors
```

## 📐 Coding Standards

### TypeScript

- Use strict TypeScript configuration
- Avoid `any` types
- Prefer type inference when obvious
- Use `type` for object shapes, `interface` for contracts
- Use `const` assertions where appropriate

```typescript
// Good
const user: User = { name: 'John', age: 30 };
function formatName(name: string): string { ... }

// Bad
const user: any = { name: 'John', age: 30 };
function formatName(name) { ... }
```

### React

- Use functional components with hooks
- Use TypeScript for props
- Prefer named exports
- Colocate styles with components
- Keep components focused and small

```typescript
// Good
export function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}

// Bad
export default function Button(props: any) {
  return <button onClick={props.onClick}>{props.label}</button>;
}
```

### File Organization

- Group related files together
- Use `__tests__` directories for tests
- Use clear, descriptive file names
- One component per file

```
src/
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.module.css
│   │   └── __tests__/
│   │       └── Button.test.tsx
```

### Code Style

- Use meaningful variable names
- Keep functions small and focused
- Write self-documenting code
- Add comments for complex logic
- Use early returns to reduce nesting

## 🧪 Testing Guidelines

### What to Test

- All utility functions
- Component rendering
- User interactions
- Edge cases and error states
- Critical business logic

### How to Write Tests

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Button', () => {
  it('should render with label', () => {
    render(<Button label="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('should call onClick when clicked', async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();

    render(<Button label="Click me" onClick={onClick} />);
    await user.click(screen.getByText('Click me'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
```

### Coverage Requirements

- Aim for 80%+ code coverage
- Focus on meaningful tests, not just coverage numbers
- Test behavior, not implementation details

## 📝 Commit Message Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Code style (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvement
- `test`: Adding or updating tests
- `build`: Build system changes
- `ci`: CI configuration changes
- `chore`: Other changes

### Examples

```bash
feat(auth): add JWT authentication

Implement JWT-based authentication with refresh tokens.
Includes login, logout, and token refresh endpoints.

Closes #123
```

```bash
fix(nav): resolve mobile menu not closing

The mobile navigation menu was not closing when clicking
outside the menu area. Added click outside handler.

Fixes #456
```

### Rules

- Use present tense ("add" not "added")
- Use imperative mood ("move" not "moves")
- Don't capitalize first letter
- No period at the end
- Keep subject line under 100 characters
- Reference issues and PRs when relevant

## 🐛 Issue Guidelines

### Before Creating an Issue

- Search existing issues to avoid duplicates
- Ensure you're on the latest version
- Check if it's a known issue in the roadmap

### Bug Reports

Include:

- Clear, descriptive title
- Steps to reproduce
- Expected vs actual behavior
- Environment details (OS, Node version, browser)
- Screenshots or error messages
- Minimal reproduction repository (if applicable)

### Feature Requests

Include:

- Clear, descriptive title
- Problem you're trying to solve
- Proposed solution
- Alternative solutions considered
- Additional context

### Issue Template

```markdown
## Description

Clear description of the issue

## Steps to Reproduce

1. Step one
2. Step two
3. Step three

## Expected Behavior

What should happen

## Actual Behavior

What actually happens

## Environment

- OS: [e.g., macOS 13.0]
- Node: [e.g., 18.17.0]
- npm: [e.g., 9.8.0]
- Browser: [e.g., Chrome 120]

## Additional Context

Any other relevant information
```

## 🎯 Where to Contribute

Not sure where to start? Look for issues labeled:

- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed
- `bug` - Bug fixes needed
- `enhancement` - New feature requests

## 💬 Questions?

- Open a [GitHub Discussion](https://github.com/drouhard/homeschool-app-foundations/discussions)
- Check existing documentation
- Review closed issues for similar questions

## 📜 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing! 🎉

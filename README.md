# Homeschool App Foundations

A modern, production-ready foundation for building homeschool applications with Next.js 14, TypeScript, and industry best practices.

[![CI](https://github.com/drouhard/homeschool-app-foundations/workflows/CI/badge.svg)](https://github.com/drouhard/homeschool-app-foundations/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)

## 🌟 Features

- **⚡ Modern Stack**: Next.js 14 with App Router, React 18, and Server Components
- **🛡️ Type Safety**: Strict TypeScript configuration with comprehensive type checking
- **✨ Code Quality**: ESLint, Prettier, and pre-commit hooks for consistent code
- **🧪 Testing**: Vitest and React Testing Library with 80%+ coverage requirements
- **🚀 CI/CD**: GitHub Actions for automated testing, linting, and deployment
- **🔒 Production Ready**: Security headers, Docker setup, and best practices built-in
- **📚 Well Documented**: Comprehensive documentation and examples

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Development](#development)
- [Testing](#testing)
- [Building](#building)
- [Deployment](#deployment)
- [Architecture](#architecture)
- [Contributing](#contributing)
- [License](#license)

## 🔧 Prerequisites

- Node.js 18.0 or higher
- npm 9.0 or higher
- Git

## 🚀 Quick Start

1. **Clone the repository**

```bash
git clone https://github.com/drouhard/homeschool-app-foundations.git
cd homeschool-app-foundations
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

4. **Initialize Husky (Git hooks)**

```bash
npm run prepare
```

5. **Start the development server**

```bash
npm run dev
```

6. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## 💻 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage
- `npm run test:ui` - Open Vitest UI
- `npm run validate` - Run all checks (type-check, lint, format, test)
- `npm run clean` - Clean build artifacts

### Project Structure

```
.
├── .github/               # GitHub configuration (Actions, templates)
├── .husky/                # Git hooks
├── .vscode/               # VS Code configuration
├── public/                # Static assets
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Home page
│   │   └── globals.css    # Global styles
│   ├── components/        # React components
│   │   └── __tests__/     # Component tests
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions and libraries
│   │   └── __tests__/     # Library tests
│   ├── types/             # TypeScript type definitions
│   └── utils/             # Utility functions
├── .env.example           # Environment variables template
├── .eslintrc.json         # ESLint configuration
├── .prettierrc            # Prettier configuration
├── commitlint.config.js   # Commitlint configuration
├── Dockerfile             # Docker configuration
├── docker-compose.yml     # Docker Compose configuration
├── next.config.ts         # Next.js configuration
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── vitest.config.ts       # Vitest configuration
```

### Code Quality

This project enforces code quality through:

- **TypeScript**: Strict type checking with comprehensive compiler options
- **ESLint**: Linting rules for TypeScript, React, and accessibility
- **Prettier**: Consistent code formatting
- **Husky**: Pre-commit hooks to run checks before commits
- **lint-staged**: Run checks only on staged files
- **Commitlint**: Enforce conventional commit messages

### Commit Message Convention

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `build`: Build system changes
- `ci`: CI configuration changes
- `chore`: Other changes

Example:
```
feat(auth): add user authentication

Implement JWT-based authentication with refresh tokens

Closes #123
```

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Open Vitest UI
npm run test:ui
```

### Writing Tests

Tests are colocated with the code they test in `__tests__` directories:

```typescript
// src/lib/__tests__/utils.test.ts
import { describe, it, expect } from 'vitest';
import { formatDate } from '../utils';

describe('utils', () => {
  describe('formatDate', () => {
    it('should format a date correctly', () => {
      const date = new Date('2025-01-15');
      const formatted = formatDate(date);
      expect(formatted).toBe('January 15, 2025');
    });
  });
});
```

## 🏗️ Building

### Development Build

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm run start
```

### Docker Build

```bash
# Build and run with Docker Compose
docker-compose up --build

# Or build manually
docker build -t homeschool-app .
docker run -p 3000:3000 homeschool-app
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy!

### Docker

```bash
# Build the image
docker build -t homeschool-app .

# Run the container
docker run -p 3000:3000 --env-file .env.local homeschool-app
```

### Other Platforms

This is a standard Next.js application and can be deployed to:
- AWS (Amplify, EC2, ECS, Lambda)
- Google Cloud (Cloud Run, App Engine)
- Azure (App Service, Container Instances)
- DigitalOcean (App Platform)
- Netlify
- Render
- Railway

## 🏛️ Architecture

### Technology Stack

- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript 5.6
- **Styling**: CSS Modules (easily extensible to Tailwind CSS, styled-components, etc.)
- **Testing**: Vitest + React Testing Library
- **Linting**: ESLint + Prettier
- **Git Hooks**: Husky + lint-staged
- **CI/CD**: GitHub Actions
- **Containerization**: Docker

### Design Principles

1. **Type Safety First**: Strict TypeScript configuration ensures type safety
2. **Component-Driven**: Modular, reusable components with clear boundaries
3. **Test-Driven**: Comprehensive test coverage with automated testing
4. **Security by Default**: Security headers and best practices built-in
5. **Performance Optimized**: React Server Components and Next.js optimizations
6. **Developer Experience**: Fast feedback loops with hot reload and pre-commit checks

### Key Decisions

- **Next.js App Router**: Modern routing with React Server Components
- **Vitest over Jest**: Faster test execution with better TypeScript support
- **Strict TypeScript**: Catch errors at compile time, not runtime
- **CSS Modules**: Scoped styles with zero runtime overhead
- **Conventional Commits**: Clear commit history and automated changelogs

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

### Quick Contribution Guide

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/amazing-feature`)
3. Make your changes
4. Run tests and validation (`npm run validate`)
5. Commit your changes (`git commit -m 'feat: add amazing feature'`)
6. Push to the branch (`git push origin feat/amazing-feature`)
7. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Matt Drouhard**
- Email: matt.drouhard@betterup.co
- GitHub: [@drouhard](https://github.com/drouhard)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Vercel](https://vercel.com/) - Deployment platform
- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vitest](https://vitest.dev/) - Testing framework

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vitest Documentation](https://vitest.dev/)
- [Testing Library Documentation](https://testing-library.com/)

---

Made with ❤️ by [Matt Drouhard](https://github.com/drouhard)

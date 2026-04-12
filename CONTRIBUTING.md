# Contributing to DevMetrics

Thanks for your interest in contributing to DevMetrics! This document provides guidelines and instructions for contributing.

## Code of Conduct

Be respectful and constructive in all interactions.

## How to Contribute

### Reporting Bugs

1. Check existing [issues](https://github.com/parsa-faraji/devmetrics/issues) first
2. Provide a clear title and description
3. Include steps to reproduce
4. Share the GitHub username you're analyzing
5. Describe expected vs actual behavior

### Suggesting Features

1. Describe the feature clearly
2. Explain why it would be useful
3. Provide mockups or examples if applicable

### Code Contributions

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Test in your browser
5. Commit with conventional commits: `git commit -m "feat: description"`
6. Push to your fork: `git push origin feature/your-feature`
7. Open a Pull Request

## Commit Message Guidelines

We use [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation updates
- `style:` for code style changes
- `refactor:` for code refactoring
- `test:` for test additions/updates
- `chore:` for build/dependencies

Example: `feat: add support for organization profiles`

## Development Workflow

### No Build Step Required

This project uses vanilla JavaScript with no build tools. Simply:

1. Edit your files
2. Open `index.html` in a browser
3. Test your changes

### Local Server (Optional)

To test with a local server:

```bash
npm run serve
# or
python3 -m http.server 8000
# Visit http://localhost:8000
```

### Testing Your Changes

1. Test with different GitHub usernames
2. Check responsive design (mobile, tablet, desktop)
3. Verify API calls work correctly
4. Test error handling (invalid users, rate limits)

## Code Style

- Use vanilla JavaScript (no frameworks)
- Keep functions focused and readable
- Add comments for complex logic
- Use meaningful variable names
- Maintain the existing code structure

## Pull Request Process

1. Update README.md if needed
2. Ensure your code works in modern browsers
3. Keep commits atomic and well-described
4. Respond to any review feedback
5. Get approval before merge

## Questions?

Open an issue or check existing discussions. The maintainer is responsive to questions!

---

**Thank you for contributing!** Every contribution helps make DevMetrics better.

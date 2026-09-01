# Contributing to Skyscanner Dropwizard Microservice

## Code Style

- Follow Java naming conventions
- Use meaningful variable names
- Add comments for complex logic
- Keep methods focused and single-responsibility

## Making Changes

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Test thoroughly
4. Commit with clear messages: `git commit -m "Add feature: description"`
5. Push and create a pull request

## Testing

Before committing:
- Run the application: `mvn exec:java`
- Test the `/search` endpoint with Postman
- Verify with different city names
- Test edge cases (empty strings, invalid cities)

## Commit Message Format

```
[TYPE] Brief description

Longer explanation if needed.

Examples of TYPE:
- feat: New feature
- fix: Bug fix
- docs: Documentation
- refactor: Code refactoring
- test: Test additions
- chore: Build, dependencies
```

## Pull Request Process

1. Update documentation if needed
2. Add tests for new features
3. Ensure all tests pass
4. Request review from maintainers

## Reporting Issues

Found a bug? Create an issue with:
- Clear description
- Steps to reproduce
- Expected vs actual behavior
- Environment details (Java version, OS, etc.)

---

Thank you for contributing! 🙏

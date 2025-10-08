# Playwright Testing Project

This project contains automated tests using Playwright, including API tests, database tests, smoke tests, and regression tests.

## Project Structure

```
├── pages/              # Page Object Models
│   ├── base.js        # Base page functionality
│   └── cart-check.js  # Cart page specific tests
├── tests/             # Test Suites
│   ├── api.spec.js    # API Tests
│   ├── db.spec.js     # Database Tests
│   ├── regression.spec.js  # Regression Test Suite
│   └── smoke.spec.js      # Smoke Test Suite
├── utils/             # Helper Functions
│   ├── api-helper.js  # API testing utilities
│   └── db-helper.js   # Database utilities
└── playwright.config.js  # Playwright Configuration
```

## Prerequisites

- Node.js (Latest LTS version recommended)
- MySQL (for database tests)

## Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running Tests

### All Tests
```bash
npx playwright test
```

### Specific Test Files
```bash
npx playwright test tests/smoke.spec.js    # Run smoke tests
npx playwright test tests/api.spec.js      # Run API tests
npx playwright test tests/db.spec.js       # Run database tests
npx playwright test tests/regression.spec.js  # Run regression tests
```

### Running Tests in UI Mode
```bash
npx playwright test --ui
```

### View Test Report
```bash
npx playwright show-report
```

## Test Categories

- **Smoke Tests**: Basic functionality tests to ensure core features work
- **API Tests**: Tests for backend API endpoints
- **Database Tests**: Tests involving database operations
- **Regression Tests**: Comprehensive tests to catch regressions

## Project Dependencies

- `@playwright/test`: Playwright test framework
- `@types/node`: TypeScript Node.js types
- `mysql2`: MySQL database client for database tests

## Reports

Test reports are generated in the `playwright-report` directory after test execution. Open `index.html` in this directory to view the HTML report.

## Contributing

1. Follow the existing code structure
2. Add appropriate comments and documentation
3. Create tests in the appropriate test suite
4. Use page objects from the `pages` directory for UI interactions
5. Use utility functions from the `utils` directory for common operations
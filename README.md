# Autotests for toDoMVC feature using codeceptjs

This is a repository for some tests for toDoMVC feature.

Packages that were used:

- codeceptjs ^2.5.0
- webdriver: ^5.22.3
- @wdio/selenium-standalone-service: ^5.16.10
- allure-commandline: ^2.13.0

Tests can be executed using the command:
```
npx codeceptjs run --steps
```

## Allure report

Run tests with allure plugin enabled:
```
npx codeceptjs run --plugins allure
```

To start please install allure-commandline package (which requires Java 8)
```
npm install -g allure-commandline --save-dev
```

View the report using the command:
```
allure serve output
```

## Links

More information about e2e testing framework on
[Codecept JS site](https://codecept.io).
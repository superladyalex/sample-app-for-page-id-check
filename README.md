# Sample App for Page ID Check

This repository is a companion project for **page-id-check**.

Its purpose is to provide a small, deterministic application that exercises every capability currently supported by the analyzer.

Rather than being a realistic application, each page and component has been intentionally designed to demonstrate a specific analysis scenario.

---

# Repository Purpose

This project serves as:

- example usage of Page ID Check
- an integration test suite
- living documentation of supported features

As new capabilities are added to the analyzer, this repository should be expanded to include representative examples.

---

# Pages

## LoginPage

Demonstrates:

- recursive component traversal
- default imports
- duplicate `id` detection across different components

Expected result:

```
❌ Duplicate id detected
```

---

## DashboardPage

Demonstrates:

- named imports
- barrel exports
- `index.ts` resolution

Expected result:

```
✅ No issues
```

---

## SettingsPage

Demonstrates:

- aliased imports
- duplicate `data-testid` detection across different components

Expected result:

```
❌ Duplicate data-testid detected
```

---

## ProfilePage

Demonstrates:

- namespace imports
- page-scoped validation

Although this page intentionally reuses DOM attribute values that exist on other pages, they should **not** be reported because validation is performed independently for each rendered page.

Expected result:

```
✅ No issues
```

---

## ComponentReusePage

Demonstrates:

- rendering multiple instances of the same component

The page renders the same component three times.

Since the component itself contains duplicate validation attributes, the rendered page should report duplicates.

Expected result:

```
❌ Duplicate id detected

❌ Duplicate data-testid detected
```

---

# Components

Components are intentionally small and focused.

Each one exists to exercise a specific aspect of the analyzer, including:

- recursive traversal
- import resolution
- barrel exports
- configurable duplicate attribute detection

Comments throughout the code explain why each component exists.

---

# Ignored Files

The repository also contains files that **should never be analyzed**.

These exist to verify exclusion rules.

Examples include:

```
src/tests/
dist/
```

If duplicates from these locations appear in analyzer output, exclusion handling has regressed.

---

# Supported Analyzer Features

This repository currently exercises:

- page discovery
- recursive traversal
- default imports
- named imports
- aliased imports
- namespace imports
- barrel exports
- `index.ts` resolution
- extensionless imports
- configurable duplicate attribute detection
- page-scoped validation
- exclusion rules

---

# Using This Repository

Update the analyzer configuration to point at this repository:

```ts
repoRoot: "../sample-app-for-page-id-check"
```

Then run:

```bash
yarn check
```

The analyzer should report only the intentional validation failures described above.

Any additional issues may indicate a regression in the analyzer.

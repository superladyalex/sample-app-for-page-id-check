import Layout from "../components/layout/Layout";

import {
  SearchBox as Search,
  SearchResults,
} from "../components/ui";

/**
 * SettingsPage
 *
 * Demonstrates:
 *
 * ✓ aliased imports
 * ✓ barrel exports
 * ✓ duplicate data-testid detection
 *
 * SearchBox is imported using an alias while
 * SearchResults is imported directly from the
 * same barrel file.
 *
 * Both components intentionally render:
 *
 * data-testid="search-input"
 *
 * Expected validation issue:
 *
 * Duplicate data-testid: "search-input"
 */
export default function SettingsPage() {
  return (
    <Layout>
      <>
        <Search />

        <SearchResults />
      </>
    </Layout>
  );
}

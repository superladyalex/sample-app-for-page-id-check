// src/pages/UserProfileColonValuePage.tsx

import Layout from "../components/layout/Layout";

/**
 * UserProfileColonValuePage
 *
 * Regression test for attribute value normalization and key stability.
 *
 * This page ensures that attribute values containing special characters
 * (specifically ":") are handled correctly by the analyzer.
 *
 * This is critical because earlier implementations used string-based
 * keys (e.g. "name:value") which could break when values contain ":".
 *
 * Expected behavior:
 * - "data-testid" should be treated as a single attribute key
 * - "user:profile" must NOT be split or mis-parsed
 * - no duplicate detection should be triggered
 */
export default function UserProfileColonValuePage() {
  return (
    <Layout>
      <div data-testid="user:profile" />
    </Layout>
  );
}

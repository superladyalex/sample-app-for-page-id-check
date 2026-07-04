import Layout from "../components/layout/Layout";

/**
 * IdVsTestIdPage
 *
 * Regression test for attribute namespace isolation.
 *
 * This page verifies that identical string values
 * used across different attribute types are NOT
 * treated as duplicates.
 *
 * Rule under test:
 *
 * - id and data-testid are independent namespaces
 * - duplicate detection must be scoped per attribute key
 *
 * In this example:
 *
 * - id="shared-value"
 * - data-testid="shared-value"
 *
 * These should NOT be flagged as duplicates.
 *
 * Expected result:
 *
 * No validation issues.
 */
export default function IdVsTestIdPage() {
  return (
    <Layout>
      <>
        <div id="shared-value" />

        <div data-testid="shared-value" />
      </>
    </Layout>
  );
}

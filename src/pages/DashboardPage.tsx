import Layout from "../components/layout/Layout";
import { Card } from "../components/ui";

/**
 * DashboardPage
 *
 * Demonstrates:
 *
 * ✓ named imports
 * ✓ barrel exports
 * ✓ index.ts resolution
 *
 * This page intentionally contains no duplicate
 * validation attributes.
 *
 * Expected result:
 *
 * No validation issues.
 */
export default function DashboardPage() {
  return (
    <Layout>
      <Card />
    </Layout>
  );
}

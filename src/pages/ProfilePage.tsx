import Layout from "../components/layout/Layout";
import * as Forms from "../components/forms";

/**
 * ProfilePage
 *
 * Demonstrates:
 *
 * ✓ namespace imports
 *
 * This page intentionally contains no duplicate
 * validation attributes.
 *
 * Expected result:
 *
 * No validation issues.
 */
export default function ProfilePage() {
  return (
    <Layout>
      <Forms.ProfileForm />
    </Layout>
  );
}

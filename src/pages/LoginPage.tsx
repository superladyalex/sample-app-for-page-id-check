import Layout from "../components/layout/Layout";
import LoginForm from "../components/forms/LoginForm";
import Footer from "../components/Footer";

/**
 * LoginPage
 *
 * Demonstrates:
 *
 * ✓ recursive component traversal
 * ✓ default imports
 * ✓ duplicate id detection across different components
 *
 * Render tree:
 *
 * LoginPage
 * ├── Layout
 * │
 * ├── LoginForm
 * │   └── Button
 * │
 * └── Footer
 *
 * Button and Footer both render:
 *
 * id="submit-button"
 *
 * Expected validation issue:
 *
 * Duplicate id: "submit-button"
 */
export default function LoginPage() {
  return (
    <Layout>
      <>
        <LoginForm />

        <Footer />
      </>
    </Layout>
  );
}

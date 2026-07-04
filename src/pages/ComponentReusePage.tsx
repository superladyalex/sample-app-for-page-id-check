import Layout from "../components/layout/Layout";
import Button from "../components/ui/Button";

/**
 * ComponentReusePage
 *
 * Demonstrates:
 *
 * ✓ repeated rendering of the same component
 *
 * The page intentionally renders Button
 * three times.
 *
 * Since Button renders:
 *
 * id="submit-button"
 * data-testid="submit-button"
 *
 * both attributes should be reported as
 * duplicates within the rendered page.
 *
 * Expected validation issues:
 *
 * Duplicate id: "submit-button"
 * Duplicate data-testid: "submit-button"
 */
export default function ComponentReusePage() {
  return (
    <Layout>
      <>
        <Button />

        <Button />

        <Button />
      </>
    </Layout>
  );
}

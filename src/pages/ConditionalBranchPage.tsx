import Layout from "../components/layout/Layout";
import {
  ConditionalPrimaryButton,
  ConditionalSecondaryButton,
} from "../components/ui";

/**
 * ConditionalBranchPage
 *
 * Regression example for conditional JSX traversal.
 *
 * The page renders one branch at runtime, but both JSX branches
 * are present in the source and should be included in static analysis.
 */
export default function ConditionalBranchPage() {
  const usePrimaryAction = Math.random() > 0.5;

  return (
    <Layout>
      {usePrimaryAction ? (
        <ConditionalPrimaryButton />
      ) : (
        <ConditionalSecondaryButton />
      )}
    </Layout>
  );
}

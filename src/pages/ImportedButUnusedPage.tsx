import Layout from "../components/layout/Layout";
import SearchBox from "../components/ui/SearchBox";
import SearchResults from "../components/ui/SearchResults";

/**
 * ImportedButUnusedPage
 *
 * Regression example for JSX-tree traversal.
 *
 * SearchResults is imported here, but it is not rendered.
 * A static import walk would still visit SearchResults and
 * incorrectly report a duplicate data-testid with SearchBox.
 *
 * The JSX tree traversal should ignore SearchResults here.
 */
export default function ImportedButUnusedPage() {
  return (
    <Layout>
      <SearchBox />
    </Layout>
  );
}

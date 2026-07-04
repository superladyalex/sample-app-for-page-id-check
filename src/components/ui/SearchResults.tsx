/**
 * SearchResults
 *
 * Demonstrates a second component introducing the
 * same data-testid as SearchBox.
 *
 * Together these components allow the validator
 * to detect duplicate data-testids across component
 * boundaries within a rendered page.
 */
export default function SearchResults() {
  return (
    <div
      id="results"
      data-testid="search-input"
    >
      Results
    </div>
  );
}

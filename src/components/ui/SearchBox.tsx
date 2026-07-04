/**
 * SearchBox
 *
 * Demonstrates duplicate data-testid detection.
 *
 * This component intentionally uses:
 *
 * data-testid="search-input"
 *
 * A second component will reuse the same value,
 * allowing the validator to detect duplicates
 * within a rendered page.
 */
export default function SearchBox() {
  return (
    <input
      id="search"
      data-testid="search-input"
    />
  );
}

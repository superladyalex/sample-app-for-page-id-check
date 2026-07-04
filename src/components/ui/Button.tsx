/**
 * UI Button
 *
 * This intentionally introduces:
 *
 *  id="submit-button"
 *  data-testid="submit-button"
 *
 * The Login page will render this button once.
 *
 * A duplicate ID will later be introduced by Footer,
 * allowing Page ID Check to verify page-level duplicate detection.
 */
export default function Button() {
  return (
    <button
      id="submit-button"
      data-testid="submit-button"
    >
      Submit
    </button>
  );
}

/**
 * Footer
 *
 * Intentionally reuses:
 *
 * id="submit-button"
 *
 * This should collide with Button.tsx,
 * but ONLY on pages where both components are rendered.
 */
export default function Footer() {
  return (
    <footer>
      <button id="submit-button">
        Help
      </button>
    </footer>
  );
}

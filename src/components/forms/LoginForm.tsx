import Button from "../ui/Button";

/**
 * LoginForm
 *
 * Demonstrates:
 *
 * ✓ default imports
 * ✓ recursive traversal
 *
 * The analyzer should discover Button through this import,
 * even though LoginPage never imports Button directly.
 */
export default function LoginForm() {
  return (
    <form>
      <input id="username" />

      <input id="password" />

      <Button />
    </form>
  );
}

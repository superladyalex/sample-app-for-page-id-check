import { SearchBox } from "../ui";

/**
 * ProfileForm
 *
 * Demonstrates named imports from a barrel.
 *
 * This form intentionally does not introduce
 * duplicate DOM attributes.
 */
export default function ProfileForm() {
  return (
    <form>
      <SearchBox />
    </form>
  );
}

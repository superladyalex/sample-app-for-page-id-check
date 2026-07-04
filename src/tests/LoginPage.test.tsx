/**
 * Ignore file.
 *
 * This file exists solely to demonstrate that
 * configured exclusion rules are respected.
 *
 * The analyzer should never inspect this file.
 */
export default function LoginPageTest() {
  return (
    <>
      <div id="ignored-id" />
      <div id="ignored-id" />
    </>
  );
}

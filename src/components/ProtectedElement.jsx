export default function ProtectedElement({ children, isAllowed }) {
  if (isAllowed) {
    return children;
  }
}

export default function Badge({ color, children }) {
  return (
    <span
      className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-${color}-100 text-${color}-800`}
    >
      {children}
    </span>
  );
}

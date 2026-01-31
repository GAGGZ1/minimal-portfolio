export default function Card({ children }) {
  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:border-gray-700 transition">
      {children}
    </div>
  );
}

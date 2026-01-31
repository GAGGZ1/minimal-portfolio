export default function Section({ title, children, id }) {
  return (
    <section id={id} className="mb-16">
      <h2 className="text-sm tracking-widest text-muted mb-6 uppercase">
        {title}
      </h2>
      {children}
    </section>
  );
}

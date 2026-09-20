export default function SectionHeading({ number, children, id }) {
  return <div className="section-heading"><span className="eyebrow">{number} / THE U GROUP</span><h2 id={id}>{children}</h2></div>;
}

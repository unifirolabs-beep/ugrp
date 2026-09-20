export default function AboutParagraph({ children, className = "" }) {
  return <p className={`about-paragraph ${className}`}>{children}</p>;
}
